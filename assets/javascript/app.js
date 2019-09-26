//press start to start the game
//timer starts count down from 30 seconds
//select answer, it will say if it is correct or not
//if run out of time, state that they ran out of time and move on to the next question 
//At the end show the correct and incorrect answers, timer is no longer clicking down. 
//Win clicking on 'Start Over' it resets the game 
let counter = 20;
var correctChoice = 0; 
var losses = 0; 
var wins = 0; 
var unanswered = 0;
var currentQuestion = 0;  
var choices = 0; 
var intervalId; 
var choiceOptions; 
var imageCounter = 6; 
var imageIntervalId = 0; 



var questions = [

    {
        question:"This George R.R Martin series of books was adapted into HBO's popular 'Game of Thrones' TV series",
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
        question: "This Philp Pullman series is often viewed as an atheist counterpoint to C.S Lewis's world of Narnia",
        choices: ["His Dark Materials", "American Gods", "Neverwhere", "Assassin's Apprentice"],
        correctChoice: "His Dark Materials",
        correctImage: "hdmCorrect.gif",
        incorrectImage:"hdmIncorrect.gif"
    
    },


    { 
        question: "What is the name of the protagonist wizard in 'The Lord of the Rings'?",
        choices: ["Merlin" , "Dumbledore", "Oz", "Gandalf"],
        correctChoice: "Gandalf",
        correctImage: "gandalfCorrect.gif",
        incorrectImage:"gandalfIncorrect.gif"
    
    }, 
    
    
    
    ];


    

    $(document).ready(function() {


function showScore() {
    console.log("show score");
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
  
        var r= $('<input type="button" class = "resetBtn" value="Reset" onClick="window.location.reload();"/>');
        $(".container").append(r);

}


function nextQuestion() {
    console.log("Next question");
    counter = 20; 

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
    console.log("Load Image"); 
 //   var correctAnswer = questions[currentQuestion].correctAnswer
imageCounter = 6; 
imageCounter--; 

 if (status === 'win')  {
     wins++; 
 $("h2").hide("#timer");
    $('#quizQuestions').empty().append('<img src= assets/images/'+ image +'>');
    $('#quizResults').empty().append(
        $('<p/>')
          .addClass("correctAnswer")
          .text("Congrats, that's correct!")
      );
      setTimeout(nextQuestion, 3 * 1000);
 }else{
     losses++; 
    $("h2").hide("#timer");
    $('#quizQuestions').empty().append('<img src= assets/images/'+ badImage +'>');
    $('#quizResults').empty().append(
        $('<p/>')
          .addClass("correctAnswer")
          .text("Sorry, that's incorrect!")
      );
      setTimeout(nextQuestion, 3 * 1000);
}
if (counter === 0) {

    imageStop(); 

}
}

function imageStop() {
    console.log("imageStop"); 
    clearInterval(imageIntervalId); 
    setTimeout(nextQuestion, 3 * 1000);
}


function stop() {
    console.log("stop"); 
        clearInterval(intervalId);
        losses++; 
        setTimeout(nextQuestion, 3 * 1000);
    }


function decrement() {
    console.log("decrement");
    counter--; 
    $('#timer').html('Timer: ' + counter); 

    if (counter === 0) {

        stop(); 

    }

}

    
function displayQuestion() {
    counter = 20; 
    intervalId = setInterval(decrement, 1000);
    console.log("Load Question"); 
  $("h2").show("#timer");
     $("a").remove(".btn");
    choices = 0; 
    //display the question and choices
    var question = questions[currentQuestion].question;
    var choices = questions[currentQuestion].choices; 
    var correctImage = questions[currentQuestion].correctImage;
    var incorrectImage = questions[currentQuestion].incorrectImage;

    $('#quizQuestions').html('<h4 class = "listQuestion">'+ question +'</h4>');
    $('#timer').html('Timer: ' + counter);
    displayChoices(choices); 
    
}

function displayChoices(choices) {
    console.log("Display Choices"); 
for (var i = 0; i < choices.length; i++){

questionOptions = $('#quizResults').append(
    $('<p/>')
      .attr("id", choices[i])
      .addClass("choice")
      .text(choices[i])
  );

   }

}

$(".btn").on('click', function() {
    currentQuestion = 0;
    wins = 0; 
    losses = 0; 
  //  intervalId = null;
    console.log("On click start"); 
    displayQuestion(); 

});


$(document).on("click", ".choice", function(){
    clearInterval(intervalId);
    console.log("On click select choice"); 
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