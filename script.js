let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

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
ctx.fillRect(30,170,30,110);
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
ctx.fillStyle = "blue";
ctx.fillRect(135,160,40,40);
ctx.closePath();

//janela direita
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(210,160,40,40);
ctx.closePath();

//telhado
ctx.beginPath();
ctx.fillStyle = "orange";
ctx.moveTo(250,200);
ctx.lineTo(150,100);
ctx.lineTo(50,200);
ctx.fill();
ctx.closePath();