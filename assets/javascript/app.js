//press start to start the game
//timer starts count down from 30 seconds
//select answer, it will say if it is correct or not
//if run out of time, state that they ran out of time and move on to the next question 
//At the end show the correct and incorrect answers, timer is no longer clicking down. 
//Win clicking on 'Start Over' it resets the game 
let counter = 30;
var correctAnswers = 0; 
var incorrectAnswers = 0; 
var unanswered = 0;
const currentQuestion = 0;  

var questions = [

    {
        question:"This George R.R Martin series of books was adapted into HBO's popular 'Game of Thrones' Tv series",
        choices: ["The Chronicals of Narnia", "A song of Ice and fire", "The Rain Wilds Chronicals", "Iron Swords Trilogy"],
        correctChoice: "A song of Ice and fire"
    
    },
    
    {
        question: "In what book do 24 children fight to the death?" ,
        choices: ["Harry Potter", "Hunger Games", "Eragon", "Lord of the Rings"],
        correctChoice: "Hunger Games"
    },
    
    { 
        question: "What is the name of the lion resurrected in C.S. Lewis' tales of Narnia?",
        choices: ["Adam" , "Jesus", "Aslan", "James"],
        correctChoice: "Aslan"
    
    },
    
    { 
        question: "This Philp Pullman series is often viewed as an atheist counterpoint to the world of Narnia",
        choices: ["His Dark Materials", "American Gods", "Neverwhere", "Assassin's Apprentice"],
        correctChoice: "His Dark Materials"
    
    },
    
    { 
        question: "What is the name of the protagonist wizard in 'The Lord of the Rings",
        choices: ["Merlin" , "Dumbledore", "Oz", "Gandalf"],
        correctChoice: "Gandalf"
    
    }, 
    
    { 
        question: "Who brought the lamp post into Narnia? The Magician's Nephew",
        choices: ["Jadis" , "Aslan", "Mr. Tumnus", "Polly"],
        correctChoice: "Jadis"
    
    }
    
    
    ];
    $(document).ready(function() {

function displayQuestion() {
    
    //display the question and choices

var question = questions[currentQuestion].question;
var choices = questions[currentQuestion].choices; 

    $('#quizDiv').html('<h4>'+ question +'</h4>');
    $('#timer').html('Timer: ' + counter);
}

displayQuestion(); 
console.log("is it working?")
console.log ( $ );

});