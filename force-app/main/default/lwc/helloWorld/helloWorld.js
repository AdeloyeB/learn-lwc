 import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    name = "Bode";
    lastName = "Adeloye";
    get fullName(){
        return this.name + " " + this.lastName;
    }
    title="Doctor";
    welcomeMessage = "Hello " + this.name;

    @track courses = {
        city: "London",
        postcode: 'SE166RL',
        courseName: 'PD1'
    };

    trackCourse(event){
        this.courses.courseName = event.target.value;
    }

    onKeyUp(event){
        this.title = event.target.value;

    }
}