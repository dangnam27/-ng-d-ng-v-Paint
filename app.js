let color = document.querySelector('#color');
let erase = document.querySelector('#erase');
let decrease = document.querySelector('#decrease'); 
let increase = document.querySelector('#increase') ;
let sizeEl = document.querySelector('#size') ;
let circle = document.querySelector('#circle')
let save = document.querySelector('#save') ;
let clear = document.querySelector('#clear'); 
let canvas= document.querySelector('canvas');
let ctx = canvas.getContext('2d');


let pos1 = {
      x : 0,
      y : 0
}

let pos2 = {
      x : 0,
      y : 0
}
let isDrawing = false
let colorPaint = '#000000';
let size = 10
sizeEl.innerText = size

document.addEventListener('mousedown',function(e){
      pos1 ={
            x : e.offsetX,
            y : e.offsetY
      }
      isDrawing = true
})

document.addEventListener('mousemove',function(e){
     if(isDrawing){
      pos2 ={
            x : e.offsetX,
            y : e.offsetY
      }
            // fille net vẽ
      ctx.beginPath();
      ctx.arc(pos1.x, pos1.y, size, 0,2 * Math.PI);
      ctx.fillStyle = colorPaint;
      ctx.fill();

      // vẽ out line
      ctx.beginPath();
      ctx.moveTo(pos1.x, pos1.y);
      ctx.lineTo(pos2.x, pos2.y);
      ctx.strokeStyle = colorPaint;
      ctx.lineWidth = size*2;
      ctx.stroke();

      pos1.x = pos2.x;
      pos1.y= pos2.y;

      
     }  
})
document.addEventListener('mouseup', function(e){
      isDrawing = false;
})

color.addEventListener('change', function(e){
      colorPaint = e.target.value
})
eraser.addEventListener('click', function(){
      colorPaint = '#ffffff'
})

decrease.addEventListener('click', function (){
    size -= 5
    size = size > 5 ? size : 5
    sizeEl.innerText = size
})
increase.addEventListener('click', function (){
      size += 5
      size = size <30 ? size : 30
      sizeEl.innerText = size
})

clear.addEventListener('click', function(){
     
      ctx.clearRect(0, 0 , 1000, 600)
})
save.addEventListener('click', function(){
     let output = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
     save.setAttribute('href', output)
     save.click();
})