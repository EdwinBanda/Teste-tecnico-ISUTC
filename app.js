const express = require('express')
const app = express()
const port = 8085
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const info = require('./database/tab')

app.use(express.static('public'))

app.engine('handlebars', handlebars.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.get('/form', (req, res) => {
    res.render('formulario', {
        style: 'form.css',
        title: 'Formulario'
    })
})

app.get('/', (req, res) => {
    info.findAll({ order: [["id", "ASC"]] })
        .then((registro) => {
            // console.log(registro)
            res.render('informacao', {
                registro: registro,
                style: 'info.css',
                title: 'Informacao'
            })
        })
        .catch((error) => {
            res.send("Erro " + error)
        })
})

app.post('/cadastro', (req, res) => {
    const { quilometragem, litros, matricula, dataViagem } = req.body
    const consumoKM = litros/quilometragem
    info.create({
        quilometragem,
        litros,
        matricula,
        dataViagem,
        consumoKM
    }).then(() => {
        // console.log()
        res.redirect('/')
    }).catch((error) => {
        res.send("Erro no cadastro " + error)
    })
})

app.get('/deletar/:id', (req,res)=>{
    info.destroy({where: {id: req.params.id}})
        .then(()=>{
            res.redirect('/')
        })
        .catch((error)=>{
            res.send("Erro ao deletar registro "+error)
        })
})



app.listen(port, () => {
    console.log("Rodando no http://localhost:8085")
})