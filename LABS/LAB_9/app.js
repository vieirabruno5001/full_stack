const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./db");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


// endereço principal -> projetos

app.get("/", (req, res) => {

    res.render("projects");

});


// abrir blog

app.get("/blog", (req, res) => {

    db.all(
        "SELECT * FROM posts",
        [],
        (err, rows) => {

            if (err) {
                console.log(err);
            }

            res.render(
                "blog",
                { posts: rows }
            );

        }
    );

});


// abrir cadastro

app.get("/cadastrar_post", (req, res) => {

    res.render(
        "cadastrar_post"
    );

});


// salvar post

app.post("/cadastrar_post", (req, res) => {

    const titulo = req.body.titulo;
    const resumo = req.body.resumo;
    const conteudo = req.body.conteudo;

    db.run(
        `
        INSERT INTO posts
        (titulo,resumo,conteudo)
        VALUES(?,?,?)
        `,
        [titulo, resumo, conteudo]
    );

    res.redirect("/blog");

});


app.listen(
3000,
()=>{

console.log(
"Servidor iniciado"
);

});