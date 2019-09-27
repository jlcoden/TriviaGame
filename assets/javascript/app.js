//counter for counting down on questions
let counter = 20;
//veriable to setting correctChoice
var correctChoice; 
//var for keeping track of losses
var losses = 0; 
//var for keeping track of wins
var wins = 0; 
//var for keeping track of current question
var currentQuestion = 0; 
// variable for keeping track of choices 
var choices; 
//variable for setting intervalId for timer
var intervalId; 
//counter for how long to show gifs
var imageCounter = 6; 
//imageInterval for image timer
var imageIntervalId = 0; 
// variable to keep track of unanswered questions
var unanswered = 0; 


//questions object
var questions = [

    {   //question 1
        question:"This George R.R Martin series of books was adapted into HBO's popular 'Game of Thrones' TV series",
        choices: ["The Chronicals of Narnia", "A song of Ice and fire", "The Rain Wilds Chronicals", "Iron Swords Trilogy"],
        correctChoice: "A song of Ice and fire",
        correctImage: "gotCorrect.gif",
        incorrectImage:"gotIncorrect.gif",
        timeUpImage: "timeUp.gif"
     
    },
    
    {   //question 2
        question: "In what book do 24 children fight to the death?" ,
        choices: ["Harry Potter", "Hunger Games", "Eragon", "Lord of the Rings"],
        correctChoice: "Hunger Games",
        correctImage: "hgCorrect.gif",
        incorrectImage:"hgIncorrect.gif",
        timeUpImage: "hgTime.gif"
    },
    
    {   //question 3
        question: "What is the name of the lion resurrected in C.S. Lewis' tales of Narnia?",
        choices: ["Adam" , "Jesus", "Aslan", "James"],
        correctChoice: "Aslan",
        correctImage: "narniaCorrect.gif",
        incorrectImage:"narniaIncorrect.gif",
        timeUpImage: "narniaTime.gif"
    
     },
    
    {   //question 4
        question: "This Philp Pullman series is often viewed as an atheist counterpoint to C.S Lewis's world of Narnia",
        choices: ["His Dark Materials", "American Gods", "Neverwhere", "Assassin's Apprentice"],
        correctChoice: "His Dark Materials",
        correctImage: "hdmCorrect.gif",
        incorrectImage:"hdmIncorrect.gif",
        timeUpImage: "hdmTime.gif"
    
    },

    
    {   //question 5
        question: "In Harry Poter, what do they call a person who lacks Magical abilities?",
        choices: ["Squib", "Hippogriff", "Mandrake", "Muggle"],
        correctChoice: "Muggle",
        correctImage: "hpCorrect.gif",
        incorrectImage:"hpIncorrect.gif",
        timeUpImage: "hpTimeUp.gif"
    
    },


    {   //question 5
        question: "In Neil Gaiman's 'American Gods', what is Wednesday's real identity?",
        choices: ["Thor", "Loki", "Odin", "Zeus"],
        correctChoice: "Odin",
        correctImage: "agCorrect.gif",
        incorrectImage:"agIncorrect.gif",
        timeUpImage: "agTimeUp.gif"
    
    },



    {   //question 6
        question: "What is the name of the protagonist wizard in 'The Lord of the Rings'?",
        choices: ["Merlin" , "Dumbledore", "Oz", "Gandalf"],
        correctChoice: "Gandalf",
        correctImage: "gandalfCorrect.gif",
        incorrectImage:"gandalfIncorrect.gif",
        timeUpImage: "lotrTime.gif"
    
    }, 
    
    
    
    ];
    
    //document wrapper 
    $(document).ready(function() {

    //function to showScore at end of the game
    function showScore() {
        //console log for debugging 
        console.log("show score");
        //clear intervalId
        clearInterval(intervalId);
    //empty the container div and create/append paragraphs for showing the score
    $('.container').empty().append(
        //add paragraph to show number of correct answers
        $('<p/>')
          .addClass("score")
          .text('Correct Answers: ' + wins)
      );
      $('.container').append(
        //add paragraph to show number of incorrect answers
        $('<p/>')
          .addClass("score")
          .text('Incorrect Answers: ' + losses)
      );

      $('.container').append(
        //add paragraph to show number of unaswered questions
        $('<p/>')
          .addClass("score")
          .text('Unanswered: ' + unanswered)
      );
  
        //create and add Reset Button for resetting the page
        var r= $('<input type="button" class = "resetBtn" value="Reset" onClick="window.location.reload();"/>');
        $(".container").append(r);

}


//function for loading next question 
function nextQuestion() {
    //console log for debugging
    console.log("Next question");
    //set counter to 20
    counter = 20; 
    //add h2 tag to show timer 
    $("h2").show("#timer");
    //check to see if on last question 
    var lastQuestion = (questions.length - 1) === currentQuestion; 
    //if last question, go to showScore function 
    if (lastQuestion) {
        
        showScore(); 
    
    } else {
    //else incriment currentQuestion counter 
    currentQuestion++; 
    //empty quizResults div of previous question, and display Question
    $('#quizResults').empty();
    displayQuestion(); 
    }
}


//function to load and display gif for correct or incorrect answer
function loadImage(status) {
//console log for debugging 
console.log("Load Image"); 
//set image counter to 6 seconds, showing the gif for 6 seconds
imageCounter = 6; 
//decrement the image counter
imageCounter--; 
//if the win status is brought over from player choice
 if (status === 'win')  {
     //increment number of wins 
     wins++; 
     //hide timer
    $("h2").hide("#timer");
    //empty the quizQuestions div and display the gif for the correct answer 
    $('#quizQuestions').empty().append('<img src= assets/images/'+ image +'>');
    //empty the quizResults div and add paragraphs stating the player chose the correct answer
    $('#quizResults').empty().append(
        $('<p/>')
          .addClass("correctAnswer")
          .text("Congrats, that's correct!")
      );
      //set Timeout for the nextQuestion method to 30 seconds 
      setTimeout(nextQuestion, 6 * 1000);
//else if it's not the win status and the wrong answer is chosen
 }else{
     //increment losses 
     losses++; 
     //hide timer 
    $("h2").hide("#timer");
    //empty quizQuestions div and display images for incorrect answer 
    $('#quizQuestions').empty().append('<img src= assets/images/'+ badImage +'>');
    //empty quizResults and add paragraph to state they chose the incorrect answer 
    $('#quizResults').empty().append(
        $('<p/>')
          .addClass("correctAnswer")
          .text("Sorry, that's incorrect!")
          );
          //add additional paragraph to state what the correct choice was 
          $('#quizResults').append( $('<p/>')  
          .addClass("correctAnswer")
          //show correctChoice
          .text("The correct answer was " + correctChoice )
          );
      //setTimeOut for nextQuestion method for 30 seconds 
      setTimeout(nextQuestion, 6 * 1000);
}
//after loading image and the timer hits 0 go to imageTimerStop function
if (imageCounter === 6) {
    //imageTimerStop
    imageTimerStop(); 

    }
}

//function for stopping image timer 
function imageTimerStop() {
    //console log for debugging 
    console.log("imageTimerStop"); 
    //clearInterval for IMageIntervalId
    clearInterval(imageIntervalId); 
    //go to and set timeout for nextQuestion fuction, 30 seconds
    setTimeout(nextQuestion, 6 * 1000);
}

//function to detect timer at 0 and tracking unanswered questions
function timerStop() {
    //console log for debugging 
    console.log("timerStop"); 
        //clear IntervalId
        clearInterval(intervalId);
        //increment unanswered counter
        unanswered++; 
      showTimeUp(); 
    
    }

    //function to show player time is up
    function showTimeUp() {
        //define timeUpImage
        var timeUpImage = questions[currentQuestion].timeUpImage;
        var correctChoice = questions[currentQuestion].correctChoice;
        //set image counter to 6 seconds
        imageCounter = 6; 
        //decrement the image counter
        imageCounter--; 
        $("h2").hide("#timer");
        //empty the quizQuestions div and display the gif for time is up
        $('#quizQuestions').empty().append('<img src= assets/images/'+ timeUpImage +'>');
        //empty the quizResults div and add paragraphs stating the player's time is up
         $('#quizResults').empty().append(
        $('<p/>')
          .addClass("timeUp")
          .text("Sorry, your time is up!")
           );
           $('#quizResults').append(
               //add paragraph stating what the correct answer was
            $('<p/>')
              .addClass("timeUp")
              .text("The correct answer was " + correctChoice )

           ); 
        setTimeout(nextQuestion, 6000);

        }


//function to count down timer for questions
function decrement() {
    //console log for debugging 
    console.log("decrement");
    //decrement counter
    counter--; 
    //display timer in timer div 
    $('#timer').html('Timer: ' + counter); 

    //if counter goes to zero go to timerStop function 
    if (counter === 0) {

        timerStop(); 

    }

}

//displayQuestion Method
function displayQuestion() {
    //set counter time
    counter = 20; 
    //set Interval for counting down 
    intervalId = setInterval(decrement, 1000);
    //set choices to 0
    choices = 0; 
    //console log for debugging 
    console.log("Load Question"); 
    //create an h2 tag to show timer 
    $("h2").show("#timer");
    //remove the start button 
    $("a").remove(".btn");
   // var for displaying question of current question 
    var question = questions[currentQuestion].question;
    //var for displaying choices of current question 
    var choices = questions[currentQuestion].choices; 
    //var for displaying correct Image of current question 
    var correctImage = questions[currentQuestion].correctImage;
    //var for displaying incorrect Image of current question 
    var incorrectImage = questions[currentQuestion].incorrectImage;

    //create h4 tag and place in quizQuestions div for holding the question 
    $('#quizQuestions').html('<h4 class = "listQuestion">'+ question +'</h4>');
    //show count down time in timer div
    $('#timer').html('Timer: ' + counter);
    //go to displayChoices method to show the choices
    displayChoices(choices); 
    
}

//function display choices 
function displayChoices(choices) {
    // console log for debugging 
    console.log("Display Choices"); 
    // for loop to display all choices for question 
    for (var i = 0; i < choices.length; i++){
        //append questions to the quizResults div as paragraphs
        questionOptions = $('#quizResults').append(
        $('<p/>')
        .attr("id", choices[i])
        .addClass("choice")
        .text(choices[i])
    );

   }
}

//On click function for detecting player clicking on Start
$(".btn").on('click', function() {
    //set variables to zero 
    currentQuestion = 0;
    wins = 0; 
    losses = 0; 
    intervalId = null;
    //console log for debugging
    console.log("On click start"); 
    //go to displayQuestion method to display the question 
    displayQuestion(); 

});


//On click function for detecting Player choice selection
$(document).on("click", ".choice", function(){
    //Upon click clear timer
    clearInterval(intervalId); 
    //console log for debugging
    console.log("On click select choice"); 
    //detect player choice when clicking on the paragraph of choice options
    selectedChoice = ($(this).attr('id'));
    //create variable for correct choice of current question
    correctChoice = questions[currentQuestion].correctChoice;
    //create variable for the correct image of the current question 
    image = questions[currentQuestion].correctImage;
    //create variable for the bad image of the current question 
    badImage = questions[currentQuestion].incorrectImage;

    //if the player selected choice is the correct go to loadImage method with the 'win' status
    if (correctChoice === selectedChoice) {
        loadImage('win');
//else go to loadImage method with 'loss' status
    } else { 
        loadImage('loss'); 

    }

    
});

}); 