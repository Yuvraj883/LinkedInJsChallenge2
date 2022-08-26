import './style.css'
const canvas = document.getElementById("canvas"); 
const eraser = document.getElementById("eraser"); 
const pencil = document.getElementById("pencil"); 
const clear = document.getElementById("clear"); 
let draw = true; 
let color; 

const ctx = canvas.getContext('2d'); 
let initX; 
let initY; 
let finX; 
let finY; 

// ctx.fillStyle = "green"; 
// ctx.fillRect(10,10,100,200); 
// canvas.addEventListener("mousemove", (e)=>{
// // ctx.beginPath(); 
// // ctx.moveTo(e.clientX, e.clientY); 
// ctx.fillStyle="red"; 
// ctx.fillRect(e.clientX, e.clientY,2,2);
// console.log("Mouse is moving!!!")
// })

eraser.addEventListener("click",()=>{
  draw=false; 
})
pencil.addEventListener("click",()=>{
  draw=true; 
})

clear.addEventListener("click",()=>{
  // alert("Are you sure?!");
 ctx.clearRect(0,0,1200,600);
})


canvas.addEventListener("mousedown",(e)=>{
initX=e.clientX; 
initY=e.clientY; 
console.log(initX, initY); 
})

canvas.addEventListener("mousemove",(e)=>{
  initX= finX; 
  initY = finY; 
  finX= e.clientX-canvas.getBoundingClientRect().left; 
  finY= e.clientY-canvas.getBoundingClientRect().top; 
  if(draw){
    color="black";
    }
    else{
      color="white";
    }
  ctx.beginPath(); 
  ctx.moveTo(initX, initY); 
  ctx.lineTo(finX,finY); 
  ctx.strokeWidth=2;
  ctx.strokeStyle=color;
  ctx.stroke();
  ctx.closePath();
 // console.log(finX, finY);


})
