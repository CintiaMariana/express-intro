// importando a biblioteca express
const express = require ("express")

// instanciando o aplicativo
const app = express()

// configurando o ejs
app.set("view engine", "ejs")

// rota para a raiz do projeto
app.get("/", (req, res) => {
    res.send("Olá mundo express!")
})

// rota para o site com arquivo html estático
app.get("/site", (req, res) => {
    // Renderizando um arquivo html 
    res.sendFile(__dirname + '/index.html')
})

// rota para o site usando ejs
app.get("/site2", (req, res) => {
    //obtém o parametro passado na query string
    const {nome} = req.query
    const{sobrenome} = req.query
    //constroi o html a partir de um template e devolve para ser renderizado
    //no segundo parametro é enviado um objeto contendo os dados para a página
    res.render("index", {nomeCompleto: nome + sobrenome})
  
})

// configurando aplicativo para funcionar na porta 3000
app.listen(3000,(err) => {
    // verificando se exite um erro e printando na tela
    if (err){
        console.log("Erro ao subir aplicação")
        return
    }
    console.log(`Escutando porta ${3000}`)
})