$(document).ready(init);

function init(){
  $('body').on('click', '.picker', paintBackground);
  $('#addColor').click(addColor);
  $('body').on('click', '#submit', submitTime);
}

var time = 1000;
function submitTime(){
  time = $('#flashTimer').val();
  startTimer();
}

function startTimer(){
  setInterval(function(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var alpha = Math.random();
    var color = 'rgba(' + red +', ' + green + ', ' + blue + ', ' + alpha +')';
    $('body').css('background-color', color);
  }, time);
}

function addColor(){
  var color = $('#colorPicker').val();
  var div = $('<div>');
  div.addClass('picker');
  div.css('background-color', color);
  $('#boxes').prepend(div);
}

function paintBackground(){
  var color = $(this).css('background-color');
  $('body').css('background-color', color);
}
