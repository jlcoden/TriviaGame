//press start to start the game
//timer starts count down from 30 seconds
//select answer, it will say if it is correct or not
//if run out of time, state that they ran out of time and move on to the next question 
//At the end show the correct and incorrect answers, timer is no longer clicking down. 
//Win clicking on 'Start Over' it resets the game 
let counter = 30;
var correctChoice = 0; 
var losses = 0; 
var wins = 0; 
var unanswered = 0;
var currentQuestion = 0;  
var choices = 0; 
var intervalId; 
var choiceOptions; 



var questions = [

    {
        question:"This George R.R Martin series of books was adapted into HBO's popular 'Game of Thrones' Tv series",
        choices: ["The Chronicals of Narnia", "A song of Ice and fire", "The Rain Wilds Chronicals", "Iron Swords Trilogy"],
        correctChoice: "A song of Ice and fire",
        correctImage: "gotCorrect.gif",
        incorrectImage:"gotIncorrect.gif"
     
    },
    
    {
        question: "In what book do 24 children fight to the death?" ,
        choices: ["Harry Potter", "Hunger Games", "Eragon", "Lord of the Rings"],
        correctChoice: "Hunger Games",
        correctImage: "hgCorrect.gif",
        incorrectImage:"hgIncorrect.gif"
    },
    
    { 
        question: "What is the name of the lion resurrected in C.S. Lewis' tales of Narnia?",
        choices: ["Adam" , "Jesus", "Aslan", "James"],
        correctChoice: "Aslan",
        correctImage: "narniaCorrect.gif",
        incorrectImage:"narniaIncorrect.gif"
    
    },
    
    { 
        question: "This Philp Pullman series is often viewed as an atheist counterpoint to the world of Narnia",
        choices: ["His Dark Materials", "American Gods", "Neverwhere", "Assassin's Apprentice"],
        correctChoice: "His Dark Materials",
        correctImage: "hdmCorrect.gif",
        incorrectImage:"hdmIncorrect.gif"
    
    },
    
    { 
        question: "What is the name of the protagonist wizard in 'The Lord of the Rings",
        choices: ["Merlin" , "Dumbledore", "Oz", "Gandalf"],
        correctChoice: "Gandalf",
        correctImage: "gandalfCorrect.gif",
        incorrectImage:"gandalfIncorrect.gif"
    
    }, 
    
    
    
    ];


    $(document).ready(function() {


//function showScore() {
//    $("h4").remove(".listQuestion");
//    $( "p" ).remove( ".choice" );
 //   clearInterval(intervalId);
//}

function showScore() {
    clearInterval(intervalId);
    
    $('.container').empty().append(
        $('<p/>')
          .addClass("score")
          .text('You got a total of ' + wins +' question(s) right')
      );
      $('.container').append(
        $('<p/>')
          .addClass("score")
          .text('You missed ' + losses +' question(s)')
      );

      $('.container').append('<button>Start Over</button>')





}



        
function nextQuestion() {


    $("h2").show("#timer");
    var lastQuestion = (questions.length - 1) === currentQuestion; 

    if (lastQuestion) {
        showScore(); 

    } else {

    currentQuestion++; 
    $('#quizResults').empty();
    displayQuestion(); 
    }
}

function loadImage(status) {
   
 //   var correctAnswer = questions[currentQuestion].correctAnswer
  counter = 5; 
 if (status === 'win')  {
wins++;
 $("h2").hide("#timer");
    $('#quizQuestions').empty().append('<img src= assets/images/'+ image +'>');
    $('#quizResults').empty().append(
        $('<p/>')
          .addClass("correctAnswer")
          .text("Congrats, that's correct!")
      );

 }else{
    losses++;
    $("h2").hide("#timer");
    $('#quizQuestions').empty().append('<img src= assets/images/'+ badImage +'>');
    $('#quizResults').empty().append(
        $('<p/>')
          .addClass("correctAnswer")
          .text("Sorry, that's incorrect!")
      );
}
}


function stop() {

        clearInterval(intervalId);
        timer = 0; 
      //  losses++; 
        nextQuestion(); 
    }


function decrement() {
    counter--; 
    $('#timer').html('Timer: ' + counter); 

    if (counter === 0) {

        stop(); 

    }

}
    
function displayQuestion() {

  $("h2").show("#timer");
     $("a").remove(".btn");
    choices = 0; 
    //display the question and choices
    counter = 30; 
    intervalId = setInterval(decrement, 1000);
    var question = questions[currentQuestion].question;
    var choices = questions[currentQuestion].choices; 
    var correctImage = questions[currentQuestion].correctImage;
    var incorrectImage = questions[currentQuestion].incorrectImage;

    $('#quizQuestions').html('<h4 class = "listQuestion">'+ question +'</h4>');
    $('#timer').html('Timer: ' + counter);
    displayChoices(choices); 
    
}

function displayChoices(choices) {

for (var i = 0; i < choices.length; i++){
// var choiceOptions = $('#quizResults').append("<p class = 'choice' style = 'border: 1px solid black;'>"  + choices[i] + '</p>'); 

questionOptions = $('#quizResults').append(
    $('<p/>')
      .attr("id", choices[i])
      .addClass("choice")
      .text(choices[i])
  );

   }

}



$(".btn").on('click', function() {

    displayQuestion(); 

});


$(document).on("click", ".choice", function(){
    selectedChoice = ($(this).attr('id'));
    correctChoice = questions[currentQuestion].correctChoice;
    image = questions[currentQuestion].correctImage;
    badImage = questions[currentQuestion].incorrectImage;

    if (correctChoice === selectedChoice) {
        loadImage('win');
      
     

    } else {
        loadImage('lost');    
     

    }
  //  nextQuestion();
});

}); 
