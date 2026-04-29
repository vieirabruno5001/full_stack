const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

ctx1.beginPath();
//quadrado vermelho
ctx1.fillStyle = "red";
ctx1.fillRect(350, 0, 50, 50);

//quadrado azul
ctx1.beginPath();
ctx1.fillStyle = "blue";
ctx1.fillRect(0, 0, 50, 50);

//retangulo amarelo
ctx1.beginPath();
ctx1.fillStyle = "yellow";
ctx1.fillRect(0, 350, 25, 50);

//quadrado amarelo
ctx1.beginPath();
ctx1.fillStyle = "yellow";
ctx1.fillRect(25, 375, 25, 25);

//retangulo preto
ctx1.fillStyle = "black";
ctx1.fillRect(375, 350, 25, 50);

//quadrado preto
ctx1.fillStyle = "black";
ctx1.fillRect(350, 375, 25, 25);

//quadrado verde baixo
ctx1.fillStyle = "aqua";
ctx1.fillRect(0, 200, 25, 25);

//quadrado verde cima
ctx1.fillStyle = "aqua";
ctx1.fillRect(0, 175, 25, 25);

//retangulo verde cima
ctx1.fillStyle = "aqua";
ctx1.fillRect(375, 185, 25, 15);

//retangulo verde baixo
ctx1.fillStyle = "aqua";
ctx1.fillRect(375, 200, 25, 15);

//quadrado vermelho 2
ctx1.fillStyle = "red";
ctx1.fillRect(150, 200, 50, 50);
ctx1.closePath();
// bola 3
ctx1.beginPath();
ctx1.fillStyle = 'yellow';
ctx1.strokeStyle = 'green';
ctx1.arc(300,300,20,0*Math.PI,2*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

// bola 2
ctx1.beginPath();
ctx1.fillStyle = 'yellow';
ctx1.strokeStyle = 'green';
ctx1.arc(100,300,20,0*Math.PI,2*Math.PI);
ctx1.stroke();
ctx1.fill();
ctx1.closePath();

// bola 1
ctx1.beginPath();
ctx1.fillStyle = 'aqua';
ctx1.strokeStyle = 'blue';
ctx1.arc(200,150,20,0*Math.PI,2*Math.PI);
ctx1.stroke();
ctx1.fill();
ctx1.closePath();

// meiabola 
ctx1.beginPath();
ctx1.fillStyle = 'aqua';
ctx1.strokeStyle = 'green';
ctx1.arc(200,400,45,1*Math.PI,2*Math.PI);
ctx1.stroke();
ctx1.fill();
ctx1.closePath();

//linhameio
ctx1.beginPath();
ctx1.moveTo(0,200);
ctx1.lineTo(400,200);
ctx1.strokeStyle = 'green';
ctx1.stroke();

//linha2
ctx1.beginPath();
ctx1.moveTo(200,200);
ctx1.lineTo(400,0);
ctx1.strokeStyle = 'red';
ctx1.stroke();

//linha1
ctx1.beginPath();
ctx1.moveTo(0,0);
ctx1.lineTo(200,200);
ctx1.strokeStyle = 'blue';
ctx1.stroke();

//linha1
ctx1.beginPath();
ctx1.moveTo(200,200);
ctx1.lineTo(200,355);
ctx1.strokeStyle = 'green';
ctx1.stroke();

//canvas
ctx1.beginPath();
ctx1.fillStyle = "black";
ctx1.font = "25px Arial";
ctx1.textAlingn = "center";
ctx1.fillText("Canvas",155,70);
ctx1.closePath();

// meio arco esquerdo 
ctx1.beginPath();
ctx1.strokeStyle = 'green';
ctx1.arc(200,400,90,0*Math.PI,1.5*Math.PI);
ctx1.stroke();
ctx1.closePath();

// meio arco
ctx1.beginPath();
ctx1.strokeStyle = 'green';
ctx1.arc(200,200,90,1*Math.PI,2*Math.PI);
ctx1.stroke();
ctx1.closePath();

// terço arco1
ctx1.beginPath();
ctx1.strokeStyle = 'green';
ctx1.arc(200,200,120,3*Math.PI,3.25*Math.PI);
ctx1.stroke();
ctx1.closePath();

// terço arco2
ctx1.beginPath();
ctx1.strokeStyle = 'green';
ctx1.arc(200,200,120,1.75*Math.PI,0*Math.PI);
ctx1.stroke();
ctx1.closePath();

// terço arco2
ctx1.beginPath();
ctx1.strokeStyle = 'green';
ctx1.arc(200,400,70,1.5*Math.PI,0*Math.PI);
ctx1.stroke();
ctx1.closePath();

//CONST 2
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

//retangulo 
ctx2.beginPath();
ctx2.fillStyle = "gray";
ctx2.fillRect(0,280,400,400);
ctx2.closePath();

//quadrado
ctx2.beginPath();
ctx2.fillStyle = "brown";
ctx2.fillRect(100,100,180,180);
ctx2.closePath();

//tronco1
ctx2.beginPath();
ctx2.fillStyle = "brown";
ctx2.fillRect(30,190,30,90);
ctx2.closePath();

//tronco2
ctx2.beginPath();
ctx2.fillStyle = "brown";
ctx2.fillRect(330,260,30,90);
ctx2.closePath();

//porta
ctx2.beginPath();
ctx2.fillStyle = "black";
ctx2.fillRect(175,200,35,80);
ctx2.closePath();

//janela esquerda
ctx2.beginPath();
ctx2.fillStyle = "lightblue";
ctx2.fillRect(125,150,50,50);
ctx2.closePath();

//janela direita
ctx2.beginPath();
ctx2.fillStyle = "lightblue";
ctx2.fillRect(210,150,50,50);
ctx2.closePath();

//telhado

ctx2.beginPath();
ctx2.fillStyle = "orange";
ctx2.moveTo(310,120);
ctx2.lineTo(190,30);
ctx2.lineTo(70,120);
ctx2.fill();
ctx2.closePath();


ctx2.beginPath();
ctx2.fillStyle = "orange";
ctx2.moveTo(310,120);
ctx2.lineTo(190,30);
ctx2.lineTo(70,120);
ctx2.fill();
ctx2.closePath();
    
// sol
ctx2.beginPath();
ctx2.fillStyle = 'yellow';
ctx2.arc(330,50,45,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

// arvore1
ctx2.beginPath();
ctx2.fillStyle = 'green';
ctx2.arc(45,180,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

// arvore2
ctx2.beginPath();
ctx2.fillStyle = 'green';
ctx2.arc(345,250,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

// cachoeira1
ctx2.beginPath();
ctx2.fillStyle = 'blue';
ctx2.arc(0,300,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

// cachoeira2
ctx2.beginPath();
ctx2.fillStyle = 'blue';
ctx2.arc(150,400,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

//quadrado cachoeira1
ctx2.beginPath();
ctx2.fillStyle = "blue";
ctx2.fillRect(0,295,35,110);
ctx2.closePath();

//quadrado cachoeira2
ctx2.beginPath();
ctx2.fillStyle = "blue";
ctx2.fillRect(0,365,150,50);
ctx2.closePath();


ctx2.beginPath();
ctx2.fillStyle = 'green';
ctx2.arc(45,180,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

// arvore2
ctx2.beginPath();
ctx2.fillStyle = 'green';
ctx2.arc(345,250,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

// cachoeira1
ctx2.beginPath();
ctx2.fillStyle = 'blue';
ctx2.arc(0,300,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

// cachoeira2
ctx2.beginPath();
ctx2.fillStyle = 'blue';
ctx2.arc(150,400,35,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.closePath();

//quadrado cachoeira1
ctx2.beginPath();
ctx2.fillStyle = "blue";
ctx2.fillRect(0,295,35,110);
ctx2.closePath();

//quadrado cachoeira2
ctx2.beginPath();
ctx2.fillStyle = "blue";
ctx2.fillRect(0,365,150,50);
ctx2.closePath();
