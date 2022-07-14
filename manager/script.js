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
    let tasksList = document.getElementById("pending");
    let completedList = document.getElementById("completed");
    tasks.forEach((task, index) => {
        let taskItem = createTaskItem(task, index);
        if(task.completed) {
            completedList.appendChild(taskItem);
        }else{
            tasksList.appendChild(taskItem);
        }
    });
}

function createTaskItem(task, id){
    let taskItem = document.createElement("li");
    taskItem.textContent = `
        [${formatTime(task.start_time)}] ${task.name}
    `; 
    if(!task.completed){
        let doneButton = document.createElement('button');
        doneButton.textContent = "Done";
        doneButton.onclick = async function(){
            await https.updateRecord(id, {'completed': true});
            await https.refetchData();
        }
    }
    if(task.is_now) taskItem.style.backgroundColor = "orange";
    return taskItem;
}

class Https{
    deploy_id = "AKfycbxHwsvNKnPEx5cWpkvCRNW7WZjYZAgkF2bB8Aw8bWTLrE_PYxJ546BvZirPuBJnI0UolA";
    url = `https://script.google.com/macros/s/${deploy_id}/exec?action=read`;

    async fetchRecords(){
        let tasks = [];
        let res = await fetch(url);
        let records = await res.json();
        return records;
    }

    async updateRecord(id, data){
        var update_url = `${url}?id=${id}&action=update`;
    }

    async refetchData(){
        location.reload();
    }
}  

var https = new Https();
async function main(){
    let records = await https.fetchRecords();
    records = records.map(record => {
        return new Task(record.name, record);
    });
    populateTasks(records);
}

// main();
