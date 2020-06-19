const express = require("express")
const server = express()

// Pegar o banco de dados
const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))

// Habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }))

//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um titulo" })
})

server.get("/create-point", (req, res) => {

    // req.query: Query strings da url
    // console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // req.body: Corpo do formulário
    // console.log(req.body)

    // Inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.render("create-point.html", {noSaved: true})
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)

})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == ""){
        return res.render("search-results.html", {total: 0})
    }

    // Pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err){
            return console.log(err)
        }

        const total = rows.length

        // Mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", {places: rows, total: total})
    })
})

//Ligar servidor
server.listen(3000)