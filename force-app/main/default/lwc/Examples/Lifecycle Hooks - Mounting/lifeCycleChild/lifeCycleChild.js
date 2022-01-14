import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log("Child Constructor is running")
    }


    connectedCallback(){
        console.log("Child connectedCallback() is running")
    }

    renderedCallback(){
        console.log("Child renderedCallback() is running")
    }
}
