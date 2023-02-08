/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "RIGHT": 39,
    "UP": 38,
    "DOWN": 40,
  }
  var Xcoordinate = 0;
  var Ycoordinate = 0;
  var Xspeed = 0;
  var Yspeed = 0;

  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);             // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp);
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
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      Xspeed = -5;
    }
    if (event.which === KEY.RIGHT) {
      Xspeed = 5;
    }
    if (event.which === KEY.UP) {
      Yspeed = -5;
    }
    if (event.which === KEY.DOWN) {
      Yspeed = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      Xspeed = 0;
    }
    if (event.which === KEY.RIGHT) {
      Xspeed = 0;
    }
    if (event.which === KEY.UP) {
      Yspeed = 0;
    }
    if (event.which === KEY.DOWN) {
      Yspeed = 0;
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
   Xcoordinate += Xspeed
   Ycoordinate += Yspeed
  }

  function redrawGameItem() {
    $("#walker").css("left", Xcoordinate)
    $("#walker").css("top", Ycoordinate)
  }

}
