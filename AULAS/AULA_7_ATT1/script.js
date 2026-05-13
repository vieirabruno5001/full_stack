let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//quadrado1
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(0,0,50,50);
ctx.closePath();

//quadrado2
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(350,0,50,50);
ctx.closePath();

//quadrado3
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(0,350,50,50);
ctx.closePath();

//quadrado4
ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(350,350,50,50);
ctx.closePath();

//boladireita
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.strokeStyle = "green";
ctx.arc(330,150,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//bolaesquerda
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.strokeStyle = "green";
ctx.arc(70,150,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//linhameio
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.strokeStyle = "green";
ctx.lineWidth = 1;
ctx.stroke();

//linha1
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.stroke();

//linha2
ctx.beginPath();
ctx.moveTo(0,400);
ctx.lineTo(400,0);
ctx.strokeStyle = "blue";
ctx.lineWidth = 1;
ctx.stroke();

//meiabola
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(200,200,50,2.0*Math.PI,3*Math.PI);
ctx.stroke();

//desenviviimento
ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "25px Arial";
ctx.textAlingn = "center";
ctx.fillText("Desenvolvimento Web",80,70);
ctx.closePath();