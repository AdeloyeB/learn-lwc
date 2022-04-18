import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(event){
        const closeModalEvent = new CustomEvent('close', {
            bubbles:true,
            detail:{
                message:"Modal Closed Successfully"
            }
        })
        this.dispatchEvent(closeModalEvent);
    }

    footerHandler(){
        console.log("Footer Event Called!")
    }
    
}