const path = require('path')
const express = require('express')
const request = require('superagent')
const server = express()

const apiEndpointBase = 'http://taco-randomizer.herokuapp.com/'


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/', (req,res) => {
  request.get(apiEndpointBase + 'random/?full-taco=true')
  .then(ApiRes => {
    res.json(ApiRes.body)
  })
})


module.exports = server
