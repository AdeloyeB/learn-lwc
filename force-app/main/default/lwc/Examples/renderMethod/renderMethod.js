import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethod.html';


export default class RenderMethod extends LightningElement {
    isButtonClicked = false;

    render(){
        if (this.isButtonClicked == false) {
            return renderTemplate;
        } else {
            return signinTemplate;
        }
    }

    handleClick() {
        this.isButtonClicked = !this.isButtonClick;
    }
}