import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(event){
        const closeModalEvent = new CustomEvent('close');
        this.dispatchEvent(closeModalEvent);
    }
    
}