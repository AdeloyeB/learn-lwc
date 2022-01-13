import { LightningElement, track } from 'lwc';

export default class NewLeadForm extends LightningElement {
    firstName = "";
    lastName = "";
    email = "";
    phone = "";
    company = "";

    onSubmitHandler(event) {
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields
    }

}