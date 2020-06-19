// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// Eportar arquivo db
module.exports = db

// Utilizar o objeto de banco de dados, para operações
// db.serialize(() => {
//     //Utilizando comandos SQL: 
    
//     // // 1. Criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         name TEXT,
//     //         image TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)


//     // // 2. Inserir dados na tabela
//     // const query = `
//     //     INSERT INTO places (
//     //         name,
//     //         image,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `

//     // const values = [
//     //     "Ecoponto do Jangurussu",
//     //     "https://images.unsplash.com/photo-1536094627107-abf98dedaa8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=818&q=80",
//     //     "Av. Castelo de Castro, Jangurussu",
//     //     "N° 1233-1369",
//     //     "Ceará",
//     //     "Fortaleza",
//     //     "Resíduos Elêtronicos, Lâmpadas"
//     // ]

//     // function afterInsertData(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertData)

//     // // 3. Consultar dados da tabela
//     // db.all(`SELECT name FROM places`, function(err, rows) {
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros: ")
//     //     console.log(rows)
//     // })

//     // // 4. Deletar dados da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso")
//     // })
// })