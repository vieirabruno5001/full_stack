const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let usuarioCadastrado = {
    email: '',
    senha: ''
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Projects.html'));
});

app.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Cadastro.html'));
});

app.post('/cadastra', (req, res) => {

    usuarioCadastrado.email = req.body.email;
    usuarioCadastrado.senha = req.body.senha;

    res.render('resposta', {
        mensagem: 'Usuário cadastrado com sucesso!'
    });
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

app.post('/login', (req, res) => {

    const email = req.body.email;
    const senha = req.body.senha;

    if (
        email === usuarioCadastrado.email &&
        senha === usuarioCadastrado.senha
    ) {

        res.render('resposta', {
            mensagem: 'Login realizado com sucesso!'
        });

    } else {

        res.render('resposta', {
            mensagem: 'Email ou senha incorretos!'
        });

    }
});

app.listen(80, () => {
    console.log('Servidor rodando na porta 80');
});