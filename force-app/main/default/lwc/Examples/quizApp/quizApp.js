import { LightningElement, track } from 'lwc';

export default class QuizApp extends LightningElement {

    selectedAnswers = {}; //storing answers
    correctAnswers = 0; //displaying results
    isSubmitted = false;

    
    get allNotSelected(){ //return FALSE if number of selected answers matches the number of questions
        return !(Object.keys(this.selectedAnswers).length === this.quizQuestions.length);
    }

    get isHighScore(){ //IF/ELSE Check on if the selected answers is equal to the total correct answers
        return `slds-text-heading_large ${this.quizQuestions.length === this.correctAnswers? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    @track quizQuestions=[ //Object which stores Question ID, Question, Potential Answers, and Correct Answer
        {
            id:'Question 1',
            question:"Which one of the following is not a tenplate loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
                {
            id:'Question 2',
            question:"What is my name?",
            answers:{
                a:"Bode",
                b:"Ryan",
                c:"ohn"
            },
            correctAnswer:"a"
        }
    ]

    handleChange(event){ //Stores Name and Value into Selected Answers Array which is declared again rather than using array.push()
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const {name, value} = event.target;

        this.selectedAnswers = {...this.selectedAnswers, [name]: value}
    }

    handleSubmit(event){ //Use of filter returns TRUE if the selected answer matches the correct answer and then passes it onto a new filtered array with the selectedCorrectAnswers. Total length is then added onto 0
        event.preventDefault()
        console.log("System Debug: " + JSON.stringify(this.selectedAnswers));
        let filteredSelectedAnswers = this.quizQuestions.filter(item=>this.selectedAnswers[item.id] === item.correctAnswer);
        this.correctAnswers = filteredSelectedAnswers.length;
        console.log(this.filteredSelectedAnswers);
        console.log("Correct Answers: " + this.correctAnswers);
        this.isSubmitted = true;
    }

    handleResetClick(event){ //Reset all the variables
        this.selectedAnswers = {};
        this.correctAnswers = 0;
        console.log("System Debug: " +  JSON.stringify(this.selectedAnswers));
        this.isSubmitted = false;
    }






}