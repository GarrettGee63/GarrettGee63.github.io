         
          /* global $, sessionStorage */
$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()  

    

          

          // This Function will be called when the ready button is clicked.






function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFTA": 65,
    "RIGHTD": 68,
    "LEFT1": 97,
    "RIGHT3": 99,
  }
  var paddle1Xcoordinate = -48;
  var paddle2Xcoordinate = 338.25;
  var paddle1Xspeed = 0;
  var paddle2Xspeed = 0;
  let interval;

  
  // Game Item Objects


  // one-time setup
  $(document).on("keydown", handleKeyDown);             
  $(document).on("keyup", handleKeyUp);
   // Game checks if its ready to start
   $(".start").on('click', handleStartClick);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()

  }
  
  /* 
  Called in response to events.
  */
  function handleStartClick() {
    interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
    $(".start").hide()
  }


  function handleKeyDown(event) {
    if (event.which === KEY.LEFTA) {
      paddle1Xspeed = -5;
    }
    if (event.which === KEY.RIGHTD) {
      paddle1Xspeed = 5;
    }
    if (event.which === KEY.LEFT1) {
      paddle2Xspeed = -5;
    }
    if (event.which === KEY.RIGHT3) {
      paddle2Xspeed = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFTA) {
      paddle1Xspeed = 0;
    }
    if (event.which === KEY.RIGHTD) {
      paddle1Xspeed = 0;
    }
    if (event.which === KEY.LEFT1) {
      paddle2Xspeed = 0;
    }
    if (event.which === KEY.RIGHT3) {
      paddle2Xspeed = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    paddle1Xcoordinate += paddle1Xspeed
    paddle2Xcoordinate += paddle2Xspeed
   }
 
   function redrawGameItem() {
    $('.paddle1').css("left", paddle1Xcoordinate)
    $('.paddle2').css("left", paddle2Xcoordinate)
  }
}







