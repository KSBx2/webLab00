"use strict";

var numberOfBlocks = 9;
var targetBlocks = [];
var trapBlock;
var targetTimer;
var trapTimer;
var instantTimer;
//3초후 실행

setTimeout(startGame, 3000);
document.observe('dom:loaded', function(){
  $("start").observe("click", startGame);
  $("stop").observe("click", stopGame);
});
function startGame(){
  $('state').innerHTML = "Ready";
  $('score').innerHTML = "0";
  startToCatch();
}
function stopGame(){
  $('state').innerHTML = "Stop";
  numberOfBlocks = 9;
  targetBlocks.clear();
}
function addTargetBlock()
{
  if(targetBlocks.length>4)
    {
      alert("you lose");
      clearInterval(targetTimer);
      targetTimer = NULL;
    }
    else{
      numberOfBlocks = Math.floor(Math.random()*9+1);
      targetBlocks.push(numberOfBlocks);
  }
}
function addTrapBlock()
{
    numberOfBlocks = Math.floor(Math.random()*9+1);
    trapBlock = numberOfBlocks;
}
function startToCatch(){
  $('state').innerHTML = "Catch";
  targetTimer = setInterval(addTargetBlock,1000);
  trapTimer = setInterval(addTrapBlock,3000);
}
