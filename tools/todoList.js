import { Tool } from "../model/Tool.js";

class TodoList extends Tool {

    taskInput;
    taskContainer;
    todos = localStorage.todo ? JSON.parse(localStorage.todo) : [];

    saveTodos(){
        localStorage.todo = JSON.stringify(this.todos);
    }

    createLayout() {
        let wrapper = document.createElement('div');
        wrapper.id = "wrapper";

        let h1 = document.createElement('h1');
        h1.textContent = "To Do List";
        wrapper.appendChild(h1);

        let todos = document.createElement('div');
        todos.id = "todos";
        wrapper.appendChild(todos);
        this.taskContainer = todos;

        let inputBox = document.createElement('div');
        inputBox.id = "inputBox";

        let input = document.createElement('input');
        input.id = "task";
        input.type = "text";
        input.placeholder = "Enter a to do...";
        inputBox.appendChild(input);
        this.taskInput = input;

        let addButton = document.createElement('button');
        addButton.id = "add";
        addButton.addEventListener('click', () => {
            this.add(this.taskInput.value);
        });
        addButton.textContent = "Add Task";
        inputBox.appendChild(addButton);

        wrapper.appendChild(inputBox);

        let style = document.createElement('style');
        style.innerHTML = `body {
            background-color: #ccc;
            font-family: sans-serif;
            padding: 0;
            margin: 0;
        }
        
        #inputBox {
            position: fixed;
            bottom: 0px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            z-index: 4;
        }
        
        #add {
            background-color: dodgerblue;
            border: none;
            color: white;
            padding: 10px;
            cursor: pointer;
            flex-grow: 2;
            font-size: 20px;
        }
        #task {
            flex-grow: 10;
            border: none;
            padding: 10px;
            font-size: 18px;
        }
        li{
            display: flex;
            justify-content: space-between;
            border: 1px solid rgba(0, 0, 0, 0.5);
            background-color: rgb(233, 228, 221);
            margin: 8px 0;
            padding-left: 10px;
            align-items: center;
            border-radius: 3px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        }
        
        .remove {
            text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.5);
            background-color: rgb(233, 80, 53);
            color: white;
            padding: 8px 15px;
            height: 100%;
            border: none;
        }
        
        #wrapper {
            width: 70%;
            background-color: rgb(235, 235, 126);
            color: black;
            margin: 120px auto;
            padding: 10px 30px;
            border-radius: 3px;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 0, 0, 0.5);
        }
        
        ol { 
            padding: 0; 
            max-height: 500px;
            overflow: auto;
        }
        
        h1{
            text-align: center;
            font-family: cursive;
        }`;
        wrapper.appendChild(style);

        return wrapper;
    }

    afterLoad(){
        this.show();
    }

    add(newTask){
        if(newTask){
            this.todos.push(newTask);
            this.saveTodos();
            this.taskInput.value = "";
            this.show();
        }else alert("Please enter a task in the input field.");
    }

    show(){
      
        this.taskContainer.innerHTML = "";

        let ol = document.createElement('ol');

        this.todos.forEach((todo,index) => {
            let li = document.createElement('li');
            li.textContent = todo;

            let removeButton = document.createElement('button');
            removeButton.className = 'remove';
            removeButton.addEventListener('click', () => { this.remove(index)});
            removeButton.textContent = "X";

            li.appendChild(removeButton);
            ol.appendChild(li);
        }); 
        
        this.taskContainer.appendChild(ol);
    }

    remove(index){
        this.todos.splice(index, 1);
        this.saveTodos();
        this.show();
    }

}

export let CurrentTool = TodoList;
