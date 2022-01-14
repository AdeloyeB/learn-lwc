import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log("Parent Constructor is running")
    }


    connectedCallback(){
        console.log("Parent connectedCallback() is running")
    }

    renderedCallback(){
        console.log("Parent renderedCallback() is running")
    }
}