// Treat it like an interface
export class Tool{
    container;

    /**
     * @param {HTMLElement} container
     */
    constructor(container){
        this.container = container;
    }

    createLayout(){
        return document.createElement('div');
    }

    load(){
        this.container.innerHTML = "";
        this.container.appendChild(this.createLayout());
        this.afterLoad();
    }

    afterLoad(){
        // implement
    }
}