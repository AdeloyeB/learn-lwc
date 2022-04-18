import { LightningElement, api } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    @api errorMessage;
    @api cardHeading;
    
    percentage=10;

     carouselData=[
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First Card",
            description:"First card description."
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"Second Card",
            description:"Second card description."
        },
         {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header:"Third Card",
            description:"Third card TEST!."
        }
    ]

    updateProgressBarHandler(event){
        this.percentage = event.target.value;
    }
    

}