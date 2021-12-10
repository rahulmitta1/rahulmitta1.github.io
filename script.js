const start = document.getElementById("start");
const stop = document.getElementById("stop");
const video = document.querySelector("video");
let recorder, videoStream, audioStream;
var startTime;
let chunks = [];
async function startRecording() {
  videoStream = await navigator.mediaDevices.getDisplayMedia({
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

  }).then(async displayStream => {

    // somebody clicked on "Stop sharing"
    displayStream.getVideoTracks()[0].onended = function () {
      stop.click();
    };


    recorder = new MediaRecorder(displayStream);

    recorder.ondataavailable = e => chunks.push(e.data);
    recorder.onstop = e => {
      var duration = Date.now() - startTime;
      const completeBlob = new Blob(chunks, { type: chunks[0].type });
      ysFixWebmDuration(completeBlob, duration, function (fixedBlob) {

        download(fixedBlob);

        video.src = URL.createObjectURL(fixedBlob);
        video.onloadedmetadata = function () {
          console.log(video.duration);
          if (video.duration === Infinity) {
            video.currentTime = 1e101;
            video.ontimeupdate = function () {
              this.ontimeupdate = () => {
                return;
              }
              console.log("After workaround", video.duration, duration);
              video.currentTime = 0;
            }
          }
        }
      });

    };

    recorder.start();
    startTime = Date.now();
    setInterval(function () {
      var duration = Date.now() - startTime;
      const completeBlob = new Blob(chunks, { type: chunks[0].type });
      ysFixWebmDuration(completeBlob, duration, function (fixedBlob) {

        download(fixedBlob);

      });
    }, 60 * 60 * 10)
  })
    .catch(console.error);;

}


start.addEventListener("click", () => {
  start.setAttribute("disabled", true);
  stop.removeAttribute("disabled");

  startRecording();
});

stop.addEventListener("click", () => {
  stop.setAttribute("disabled", true);
  start.removeAttribute("disabled");

  recorder.stop();
});


function download(blob) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = url;
  a.download = 'test.mkv';
  a.click();
  window.URL.revokeObjectURL(url);
}