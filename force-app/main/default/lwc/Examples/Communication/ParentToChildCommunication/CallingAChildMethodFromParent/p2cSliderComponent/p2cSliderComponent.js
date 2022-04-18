import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {

    sliderValue = 20;

    sliderChangeHandler(event){

        this.sliderValue = event.target.value;

    }

    @api resetSlider(){
        this.sliderValue = 50;
    }
}