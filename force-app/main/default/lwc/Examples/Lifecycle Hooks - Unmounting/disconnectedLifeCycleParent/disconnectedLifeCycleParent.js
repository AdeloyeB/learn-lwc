import { LightningElement } from 'lwc';

export default class DisconnectedLifeCycleParent extends LightningElement {

    isChildVisible = false;

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

    showChildComponent(){
        this.isChildVisible = true;

    }

    hideChildcComponent(){
        this.isChildVisible = false;
    }


}