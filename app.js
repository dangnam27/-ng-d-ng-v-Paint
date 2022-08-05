let color = document.querySelector('#color');
let erase = document.querySelector('#erase');
let decrease = document.querySelector('#decrease'); 
let increase = document.querySelector('#increase') ;
let size = document.querySelector('#size') ;
let save = document.querySelector('#save') ;
let clear = document.querySelector('#clear'); 
let canvas= document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 150);
// ctx.stroke();

let currentPos = {
      x = 0
      y = 0
}
canvas.addEventListener('mousedown',function(e){
     x = e.offsetX
     y = e.offsetY
})

