var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var keyUp = document.getElementById('keyUp');
var keyLeft = document.getElementById('keyLeft');
var keyRight = document.getElementById('keyRight');
var keyDown = document.getElementById('keyDown');

var snake = [ {x: 10, y: 10} ];
var food = {};
var score = 0;
var dir = '';
var assesKeyboard = true;
var timer = 300;

spawnFood();
game();

function game() {
    assesKeyboard = true;
    ctx.clearRect(0, 0, 632, 632)
    drawFood();
    drawSnake();
    testColl();
    aboutColl();
    drawScore();
    setTimeout('game()', timer);
}

function aboutColl() {
    if(snake.length > 4) {
        var x = snake[0].x;
        var y = snake[0].y;
        for(var i = 4; i < snake.length; i++) {
            if(x == snake[i].x && y == snake[i].y) {
                dir = '';
                snake = [ {x: 10, y: 10} ];
                spawnFood();
                score = 0;
            }
        }
    }
}

function addSnake() {
    var x = snake[0].x;
    var y = snake[0].y;
    if(dir == 'left') x -= 1;
    if(dir == 'right') x += 1;
    if(dir == 'up') y -= 1;
    if(dir == 'down') y += 1;
    var obj = {};
    obj.x = x;
    obj.y = y;
    snake.unshift(obj);
    spawnFood();
    score++;
}

function testColl() {
    var x = snake[0].x;
    var y = snake[0].y;
    if(dir == 'left') x -= 1;
    if(dir == 'right') x += 1;
    if(dir == 'up') y -= 1;
    if(dir == 'down') y += 1;
    if(food.x == x && food.y == y) {
        var obj = {};
        obj.x = x;
        obj.y = y;
        snake.unshift(obj);
        spawnFood();
        score++;
        return;
    }
    stepSnake();
}


function drawScore() {
    var board = document.getElementById('score').innerHTML = 'Очки: ' + score;
}

function stepSnake() {
    var x = 0;
    var y = 0;
    var obj = {};
    obj.x = snake[0].x;
    obj.y = snake[0].y;
    if(dir == 'left') x -= 1;
    if(dir == 'right') x += 1;
    if(dir == 'up') y -= 1;
    if(dir == 'down') y += 1;
    obj.x = wallColl(obj.x + x);
    obj.y = wallColl(obj.y + y);
    if(dir) {
        snake.pop();    
        snake.unshift(obj);
    }
}

function wallColl(val) {
  if(val < 0) val = 20;
  if(val > 20) val = 0;
  return val;
}

document.onkeydown = function(event) {
    debugger
 if(assesKeyboard) {
    if(event.keyCode == 65 && dir != 'right') dir = 'left';
    if(event.keyCode == 87 && dir != 'down') dir = 'up';
    if(event.keyCode == 68 && dir != 'left') dir = 'right';
    if(event.keyCode == 83 && dir != 'up') dir = 'down';
    assesKeyboard = false;
  }
}


function drawFood() {
  var x = food.x * 30 + 2;
  var y = food.y * 30 + 2;
  ctx.fillStyle = 'red';
  ctx.fillRect(x, y, 28, 28);
}

function spawnFood() {
    var x = Math.floor(Math.random() * 21);
    var y = Math.floor(Math.random() * 21);
    for( var i = 0; i < snake.length; i++) {
        if(x == snake[i].x && y == snake[i].y) {
            spawnFood();
            return;
        }
        food.x = x;
        food.y = y;
    }
}

function drawSnake() {
    ctx.fillStyle = 'green';
    for( var i = 0; i < snake.length; i++) {
        var x = snake[i].x * 30 + 2;
        var y = snake[i].y * 30 + 2;
        ctx.fillRect(x, y, 28, 28);
    }
}

keyUp.ontouchend = function() {
    if(assesKeyboard && dir != 'down') {
        dir = 'up';
        assesKeyboard = false;
    }
}

keyDown.ontouchend = function() {
    if(assesKeyboard && dir != 'up') {
        dir = 'down';
        assesKeyboard = false;
    }
}

keyLeft.ontouchend = function() {
    if(assesKeyboard && dir != 'right') {
        dir = 'left';
        assesKeyboard = false;
    }
}

keyRight.ontouchend = function() {
    if(assesKeyboard && dir != 'left') {
        dir = 'right';
        assesKeyboard = false;
    }
}