import { LightningElement, api } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    @api errorMessage
    message = "Please stop hitting me";

}