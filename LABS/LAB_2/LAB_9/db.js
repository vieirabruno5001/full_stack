const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/blog.db");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            resumo TEXT,
            conteudo TEXT
        )
    `);

});

module.exports = db;