const express = require('express')
const nunjucks = require('nunjucks')
const manifest = require('./manifest');
const server = express()

nunjucks.configure('.', {
  autoescape: true,
  express: server
});

server.use('/images',express.static('images'))
server.use('/assets',express.static('assets'))

server.get('*',(request,response) =>{
  response.render('index.html', {
    manifest: manifest
  })
})
server.listen(3000,() =>{
  console.log("server is running in 3000")
})
