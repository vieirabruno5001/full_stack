const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.set("view engine", "ejs");

let usuario = "";
let senha = "";

// página inicial
app.get("/", (req,res)=>{

res.sendFile(
path.join(
__dirname,
"public",
"Projects.html"
));

});

// abre cadastro
app.get("/cadastra",(req,res)=>{

res.sendFile(
path.join(
__dirname,
"public",
"Cadastro.html"
));

});

// abre login
app.get("/login",(req,res)=>{

res.sendFile(
path.join(
__dirname,
"public",
"Login.html"
));

});

// salva cadastro
app.post("/cadastro",(req,res)=>{

usuario = req.body.usuario;
senha = req.body.senha;

res.render(
"resposta",
{
status:
"Cadastro realizado"
}
);

});

// verifica login
app.post("/entrar",(req,res)=>{

if(
req.body.usuario === usuario &&
req.body.senha === senha
){

res.render(
"resposta",
{
status:
"Login realizado"
}
);

}
else{

res.render(
"resposta",
{
status:
"Login incorreto"
}
);

}

});

app.listen(80,()=>{

console.log(
"Servidor funcionando"
);

});