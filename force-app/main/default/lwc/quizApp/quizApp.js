import { LightningElement, track } from 'lwc';

export default class QuizApp extends LightningElement {

    selectedAnswers = {}; //storing answers
    correctAnswers = 0; //displaying results
    get allNotSelected(){
        return !(Object.keys(this.selectedAnswers).length === this.quizQuestions.length);
    }

    @track quizQuestions=[
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

    handleChange(event){
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const {name, value} = event.target;

        this.selectedAnswers = {...this.selectedAnswers, [name]: value}
    }

    handleClick(event){
        event.preventDefault()
        console.log("System Debug: " + JSON.stringify(this.selectedAnswers));
        let filteredSelectedAnswers = this.quizQuestions.filter(item=>this.selectedAnswers[item.id] === item.correctAnswer);
        this.correctAnswers = filteredSelectedAnswers.length
        console.log("System Debug: " + this.filteredSelectedAnswers);
    }

    handleResetClick(event){
        console.log("System Debug: " +  JSON.stringify(this.selectedAnswers));
    }






}