class Task{
    name;
    type;
    time;
    duration;

    constructor(name, data = {}){
        this.name = name;
        Object.assign(this, data);
    }

    isNow(){
        if(currentTime() > this.time) {
            return true;
        }
        return false;
        
    }
}

let tasks = [
    new Task("Morning exercise", {type: "Health", time: 7.00 }),
    new Task("Evening bath",{type: "Health",time: 18.00}),
    new Task("Sleep",{type: "Health",time: 22.50, duration: 6, isNow(){
        let curTime =  currentTime();
        return (curTime > 22 && curTime < 24) || ( curTime < 5 && curTime > 0);
    }}),
];

function formatTime(time){
    let minutes = parseInt(time).toString();
    let seconds = ((time%1)*10).toString();
    return `${minutes.padStart(2,0)}:${seconds.padEnd(2,0)}`;
}

function currentTime(){
    let date = new Date();
    let currentTime = parseInt(date.getHours()) + parseFloat(parseFloat(date.getMinutes()/60).toFixed(1));
    return currentTime;
}

function populateTasks(){
    let totalTasks = tasks.length;
    let tasksOL = document.getElementById("tasks");
    tasks.forEach((task, index) => {
        let taskLI = document.createElement("li");
        taskLI.textContent = `
            [${formatTime(task.time)}] ${task.name}
        `;
        if(task.isNow()) taskLI.style.backgroundColor = "orange";
        tasksOL.appendChild(taskLI);
    });
}

populateTasks();

function fetchTasks(){
    let url = "https://script.googleusercontent.com/macros/echo?user_content_key=H98gcFsuDp9qNkPsUMtOozeXJXnncdxMW2wYpBCkruoldfOAJ0WX58_KWMkHItlxYzFiUTZRgnAjkwLTOqF40Pz_5TZBVhlGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDtwMRRUT_7dOk4Uyr7WwR718nQShds_jPACE_XzbYiDhg2DI68lzUafYJPaPy-KIllMSI2ZQGMwQiWlutGXL3ksZE4Edcv13Nz9Jw9Md8uu&lib=MHiAxsktMwc0dnUO8vIbGleIV_rkcH8_K";
    fetch(url).then(res => res.json).then(res => console.log);
}

fetchTasks();