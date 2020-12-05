const porta = 7070

const express = require('express')
const request = require('request')

const app = express()

const bodyParser = require('body-parser')
//const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'
//const getId = require('./getId')
const host = 'http://pokeapi.co/api/v2'
const path = '/pokemon/'
const getId = require('./getId')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//chamar os dados da API

request(`${host}${path}`, (req, res, body) => {
    JSON.parse(body)
    next()
})

//Tratar os dados da API
app.get('/pokemon', (req, res, next) => {
res.send(getId.getPokemons())
next()
})

app.get('/pokemon/:id', (req, res, next) => {
res.send(getId.getPokemon(req.params.id))
next()

})




//Trazer o nome do pokemon somente




// confirmação de backend ativo no console 
app.listen(porta, () => {
    console.log(`Backend ativo! Servidor está executando na porta ${porta}.`)
})

// ------------------------ end ------------------------------------------
/*




















// getId

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const pokemons = {}

function salvarPokemon(pokemon) {
    if (!pokemon.id) pokemon.id = sequence.id
    pokemons[pokemon.id] = pokemon
    return pokemon
}

function getPokemon(id) {
    return pokemons[id] || {}
}

function getPokemons() {
    return Object.values(pokemons)
}

function excluirPokemon(id) {
    const pokemon = pokemons[id]
    delete pokemons[id]
    return pokemon
}

// ----------------------------------------------

/*
request(`${host}${path}`, (err, res, body) => {
    console.log(body)
  })
*/

//Consumir a API

/* tentativa 1

const getPokemon = id => {
    const idUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
    return new Promise((resolve, reject) => {
        pokeUrl.get(idUrl, resposta => {
            let resultado =''

            resposta.on('data', dados => {
                resultado += dados
            })

            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject
                }
            })
        })
    })
}
 

// tentativa 2

// consumir a api

app.get(pokeUrl, (req, res, next) => {
        res.send(JSON.parse(pokemons) )
        next()
})

//Tratar os dados da API
app.get('/pokemon', (req, res, next) => {
    res.send(getId.getPokemons())
    next()
})

app.get('/pokemon/:id', (req, res, next) => {
    res.send(getId.getPokemon(req.params.id))
    next()
    
})


app.get('/pokemon/:id', (req, res, next) => {
    const { id } = req.params

    request(`${host}${path}${id}`, (err, res, body) => {
      res.send(body)
    })
  })


*/