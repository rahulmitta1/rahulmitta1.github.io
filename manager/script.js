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
