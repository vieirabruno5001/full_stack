const canvas = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");

//retangulo 
ctx.beginPath();
ctx.fillStyle = "gray";
ctx.fillRect(0,280,400,400);
ctx.closePath();

//quadrado
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(100,100,180,180);
ctx.closePath();

//tronco1
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(30,190,30,90);
ctx.closePath();

//tronco2
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(330,260,30,90);
ctx.closePath();

//porta
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(175,200,35,80);
ctx.closePath();

//janela esquerda
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.fillRect(125,150,50,50);
ctx.closePath();

//janela direita
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.fillRect(210,150,50,50);
ctx.closePath();

//telhado
ctx.beginPath();
ctx.fillStyle = "orange";
ctx.moveTo(310,120);
ctx.lineTo(190,30);
ctx.lineTo(70,120);
ctx.fill();
ctx.closePath();

// sol
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(330,50,45,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

// arvore1
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(45,180,35,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

// arvore2
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(345,250,35,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

// cachoeira1
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(0,300,35,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

// cachoeira2
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(150,400,35,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

//quadrado cachoeira1
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(0,295,35,110);
ctx.closePath();

//quadrado cachoeira2
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(0,365,150,50);
ctx.closePath();


let canvas2 = document.getElementById("canvas1");
let ctx2 = canvas.getContext("2d");
// arvore1
ctx2.beginPath();
ctx2.fillStyle = 'green';
ctx2.arc(100,180,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();