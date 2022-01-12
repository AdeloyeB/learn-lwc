import { LightningElement, track } from 'lwc';

export default class QuizApp extends LightningElement {

    selectedQuestionsCorrect = false;
    selectedQuestions ={};

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
        const {name, value} = event.target;

        this.selectedQuestions = {...this.selectedQuestions, [name]: value}
    }

    handleClick(event){}

    handleResetClick(event){}






}