class Task{
    name;
    type;
    start_time;
    duration;
    is_now;
 
    constructor(name, data = {}){
        this.name = name;
        Object.assign(this, data);
    }
}

function formatTime(time){
    let minutes = parseInt(time).toString();
    let seconds = ((time%1)*6).toString();
    return `${minutes.padStart(2,0)}:${seconds.padEnd(2,0)}`;
}

function currentTime(){
    let date = new Date();
    let currentTime = parseInt(date.getHours()) + parseFloat(parseFloat(date.getMinutes()/60).toFixed(1));
    return currentTime;
}

function populateTasks(tasks){
    let totalTasks = tasks.length;
    let tasksOL = document.getElementById("tasks");
    tasks.forEach((task, index) => {
        let taskLI = document.createElement("li");
        taskLI.textContent = `
            [${formatTime(task.start_time)}] ${task.name}
        `; 
        if(task.is_now) taskLI.style.backgroundColor = "orange";
        tasksOL.appendChild(taskLI);
    });
}

function fetchTasks(){
    let deploy_id = "AKfycbxHwsvNKnPEx5cWpkvCRNW7WZjYZAgkF2bB8Aw8bWTLrE_PYxJ546BvZirPuBJnI0UolA";
    let url = `https://script.google.com/macros/s/${deploy_id}/exec`;
    let tasks = [];
    fetch(url).then(res => res.json()).then(records => {
        records.forEach(record => {
            tasks.push(new Task(record.name, record));
        });
        populateTasks(tasks);
       
    });
}  
fetchTasks();