import { Tool } from "../model/Tool.js";
import { ysFixWebmDuration } from "../libs/fix-webm-duration.js";

class ScreenRecorder extends Tool {

    video;
    startButton;
    stopButton;
    recorder;
    videoStream;
    audioStream;
    startTime;
    chunks = [];
    hourInMilliseconds = 60 * 60 * 1000;
    downloadInterval = this.hourInMilliseconds; // an hour

    createLayout() {
        let div = document.createElement('div');
        this.startButton = document.createElement('button');
        this.startButton.textContent = "Start Recording";
        this.stopButton = document.createElement('button');
        this.stopButton.textContent = "Stop Recording";
        this.stopButton.disabled = true;

        this.startButton.addEventListener("click", () => {
            this.startButton.disabled = true;
            this.stopButton.disabled = false;
            this.startRecording();
        });

        this.stopButton.addEventListener("click", () => {
            this.stopButton.disabled = true;
            this.startButton.disabled = false;

            this.recorder.stop();
        });

        div.appendChild(this.startButton);
        div.appendChild(this.stopButton);

        this.video = document.createElement('video');
        this.video.controls = true;
        div.appendChild(this.video);
        return div;
    }

    async startRecording() {
        console.log('startRecording');
        var mediaConstraint = {
            // video: { 
            //     mediaSource: "screen",
            //     width: {  ideal: 1280, max: 1920 },
            //     height: { ideal: 720, max: 1080 },
            //  },
            audio: {
                autoGainControl: false,
                echoCancellation: true,
                googAutoGainControl: false,
                noiseSuppression: true,
                sampleRate: 44100
            },
            video: true,
            // audio: true

        }

        this.videoStream = await navigator.mediaDevices.getDisplayMedia(mediaConstraint).then(async displayStream => {

            // somebody clicked on "Stop sharing"
            displayStream.getVideoTracks()[0].onended = () => {
                this.stopButton.click();
            };

            this.recorder = new MediaRecorder(displayStream);
            this.recorder.addEventListener('dataavailable', event => { this.handleOnDataAvailable(event) });
            this.recorder.addEventListener('stop', event => { this.handleOnStop(event) });
            this.recorder.start(1000);

            this.startTime = Date.now();

        }).catch(console.error);;

    }

    download(blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        a.href = url;
        a.download = 'test.mkv';
        a.click();
        window.URL.revokeObjectURL(url);
    }


    handleOnDataAvailable(e) {
        console.log('handling data');
        this.chunks.push(e.data);
        if (Date.now() - this.startTime > this.downloadInterval) {
            this.handleOnStop(e);
            this.downloadInterval += this.hourInMilliseconds;
        }

    }

    handleOnStop(e) {
        console.log('Recording stopped');
        var duration = Date.now() - this.startTime;
        const completeBlob = new Blob(this.chunks, { type: this.chunks[0].type });
        ysFixWebmDuration(completeBlob, duration, fixedBlob => { this.handleFixedBlob(fixedBlob) });
    }

    handleFixedBlob(fixedBlob) {
        console.log('Handling fixed blob');
        this.download(fixedBlob);

        this.video.src = URL.createObjectURL(fixedBlob);
        this.video.onloadedmetadata = () => {
            console.log(this.video.duration);
            if (this.video.duration === Infinity) {
                this.video.currentTime = 1e101;
                this.video.ontimeupdate = () => {
                    console.log("After workaround", this.video.duration);
                    this.video.currentTime = 0;
                }
            }
        }
    }


}

export let CurrentTool = ScreenRecorder;
