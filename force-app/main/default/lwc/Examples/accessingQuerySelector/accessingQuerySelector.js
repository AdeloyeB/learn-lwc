import { LightningElement } from 'lwc';

export default class AccessingQuerySelector extends LightningElement {

    userNames = ["Ryan", "Bode", "Joseph"]

    fetchDetailsHandler(){
        const h1Element = this.template.querySelector('h1');
        h1Element.style.color = 'red';


        const userElements = this.template.querySelectorAll('.name');
        console.log(h1Element.innerText);
        Array.from(userElements).forEach(item => {
            console.log(item.innerText);
            item.setAttribute('title', item.innerText)});

        // lwc:manual DEMO - Add this directive to native HTML element to attach an HTML element as a child
        const childEelement = this.template.querySelector('.child');
        childEelement.innerHTML = '<p> Hello World 3.0 </p>'
    }
}