         
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
    "arrowLeft": 37,
    "arrowRight": 39,
  }
  var paddle1 = paddle("#paddle1", -48, 160.125, 0, 10, 30)
  var paddle2 = paddle("#paddle2", 338.25, 160.125, 0, 10, 30)
  var ball1 = ball("#ball1", 160.125, 368.2875, 0, 0, 10, 10)
  var ball2 = ball("#ball2", 160.125, -58.0375, 0, 0, 10, 10)


  
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
    paddlesInBounds()

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
      paddle1.xSpeed = -5;
    }
    if (event.which === KEY.RIGHTD) {
      paddle1.xSpeed = 5;
    }
    if (event.which === KEY.arrowLeft) {
      paddle2.xSpeed = -5;
    }
    if (event.which === KEY.arrowRight) {
      paddle2.xSpeed = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFTA) {
      paddle1.xSpeed = 0;
    }
    if (event.which === KEY.RIGHTD) {
      paddle1.xSpeed = 0;
    }
    if (event.which === KEY.arrowLeft) {
      paddle2.xSpeed = 0;
    }
    if (event.which === KEY.arrowRight) {
      paddle2.xSpeed = 0;
    }
  }

  function paddle(ID, x, y, xSpeed, height, width) {
    return {
      ID: ID,
      x: x,
      y: y,
      xSpeed: xSpeed,
      height: height,
      width: width
    }
  }

  function ball(ID, x, y, xSpeed, ySpeed, height, width) {
    return {
      ID: ID,
      x: x,
      y: y,
      xSpeed: xSpeed,
      ySpeed: ySpeed,
      height: height, 
      width: width,
    }
  }

  function paddlesInBounds() {
    if (paddle1.x >= -30 || paddle1.x <= -389.825) {
      paddle1.x = paddle1.x - paddle1.xSpeed
    }
    if (paddle2.x <= 320.25 || paddle2.x >= 680.175) {
      paddle2.x = paddle2.x - paddle2.xSpeed
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
    // updates paddles postion base on speed
    paddle1.x += paddle1.xSpeed
    paddle2.x += paddle2.xSpeed
    // redraws balls base on speed
   }
 
   function redrawGameItem() {
    //redraws paddles postions
    $("#paddle1").css("left", paddle1.x)
    $("#paddle2").css("left", paddle2.x)
    $("#paddle1").css("top", paddle1.y)
    $("#paddle2").css("top", paddle2.y)
    // redraws balls postions
    $("#ball1").css("left", ball1.x)
    $("#ball2").css("left", ball2.x)
    $("#ball1").css("top", ball1.y)
    $("#ball2").css("top", ball2.y)
  }

}







