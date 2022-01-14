import { LightningElement } from 'lwc';

export default class DisconnectedLifeCycleChild extends LightningElement {

    name = [];


        constructor(){
        super()
        console.log("Child Constructor is running")
    }


    connectedCallback(){
        console.log("Child connectedCallback() is running")
        this.name = [...this.name, "Bode"]
        console.log("Array Length: " + this.name.length)
    }

    renderedCallback(){
        console.log("Child renderedCallback() is running")
    }

    disconnectedCallback(){
        console.log("disconnectedCallback() is running")
        console.log("Child has been disconnected")
        this.name = []
        console.log("Array Length: " + this.name.length)
    }
} 