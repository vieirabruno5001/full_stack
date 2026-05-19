const express = require("express");

const bodyParser = require("body-parser");

const db = require("./db/connection");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));


// PAGINA INICIAL

app.get("/", (req, res) => {

    res.redirect("/projetos");

});


// PROJETOS

app.get("/projetos", (req, res) => {

    res.render("projetos");

});


// CADASTRO USUARIO

app.get("/cadastro", (req, res) => {

    res.render(
        "cadastroUsuario"
    );

});

app.post("/cadastro", (req, res) => {

    const {
        nome,
        login,
        senha
    } = req.body;

    db.run(
        `
INSERT INTO usuarios(
nome,
login,
senha
)

VALUES(
?,
?,
?
)
`,
        [
            nome,
            login,
            senha
        ]
    );

    res.redirect(
        "/login"
    );

});


// LOGIN

app.get("/login", (req, res) => {

    res.render(
        "login"
    );

});

app.post("/login", (req, res) => {

    const {
        login,
        senha
    } = req.body;

    db.get(
        `
SELECT *

FROM usuarios

WHERE login=?

AND senha=?
`,
        [
            login,
            senha
        ],

        (err, user) => {

            if (user) {

                res.redirect(
                    "/carros"
                );

            }

            else {

                res.send(
                    "Usuario invalido"
                );

            }

        }

    );

});


// LISTAR CARROS

app.get("/carros", (req, res) => {

    db.all(
        "SELECT * FROM carros",

        [],

        (err, rows) => {

            res.render(
                "carros",
                {
                    carros: rows
                }
            );

        }

    );

});


// NOVO CARRO

app.get("/novoCarro", (req, res) => {

    res.render(
        "novoCarro"
    );

});

app.post("/novoCarro", (req, res) => {

    const {
        marca,
        modelo,
        ano,
        qtde
    } = req.body;

    db.run(
        `
INSERT INTO carros(

marca,
modelo,
ano,
qtde_disponivel

)

VALUES(
?,
?,
?,
?
)
`,
        [
            marca,
            modelo,
            ano,
            qtde
        ]
    );

    res.redirect(
        "/carros"
    );

});


// EDITAR

app.get(
    "/editar/:id",

    (req, res) => {

        db.get(
            "SELECT * FROM carros WHERE id=?",

            [
                req.params.id
            ],

            (err, row) => {

                res.render(
                    "editarCarro",
                    {
                        carro: row
                    }
                );

            }

        );

    });

app.post(
    "/editar/:id",

    (req, res) => {

        const {
            marca,
            modelo,
            ano,
            qtde
        } = req.body;

        db.run(
            `
UPDATE carros

SET

marca=?,

modelo=?,

ano=?,

qtde_disponivel=?

WHERE id=?
`,
            [
                marca,
                modelo,
                ano,
                qtde,
                req.params.id
            ]
        );

        res.redirect(
            "/carros"
        );

    });


// DELETE

app.get(
    "/deletar/:id",

    (req, res) => {

        db.run(
            "DELETE FROM carros WHERE id=?",

            [
                req.params.id
            ]
        );

        res.redirect(
            "/carros"
        );

    });


// VENDER

app.get(
    "/vender/:id",

    (req, res) => {

        db.get(
            `
SELECT qtde_disponivel

FROM carros

WHERE id=?
`,
            [
                req.params.id
            ],

            (err, row) => {

                if (
                    row.qtde_disponivel > 0
                ) {

                    db.run(
                        `
UPDATE carros

SET

qtde_disponivel=
qtde_disponivel-1

WHERE id=?
`,
                        [
                            req.params.id
                        ]
                    );

                }

                res.redirect(
                    "/carros"
                );

            }

        );

    });

app.listen(
    80,
    () => {

        console.log(
            "Servidor ativo"
        );

    });