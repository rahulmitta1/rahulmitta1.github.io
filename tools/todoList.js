import { Tool } from "../model/Tool.js";

class TodoList extends Tool {

    taskInput;
    taskContainer;
    todos = localStorage.todo || [];

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

        let button = document.createElement('button');
        button.id = "add";
        button.addEventListener('click', this.add);
        button.textContent = "Add Task";
        inputBox.appendChild(button);

        wrapper.appendChild(inputBox);

        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'todos.css';
        wrapper.appendChild(link);

        return wrapper;
    }

    afterLoad(){
        this.show();
    }

    add(){
        var task = this.taskInput.value;
        if(task != ''){
            this.todos.push(task);
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

            let removeButton = document.querySelector('button');
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
