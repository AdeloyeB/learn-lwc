import { LightningElement, track } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isVisible = false;
    @track data = {
        name: 'Bode',
        country: 'United Kingdom'
    };

    handleClick(event){
        this.isVisible = true;
    }
}