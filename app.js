const request = require('request')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, response) => {
request('http://api.coindesk.com/v1/bpi/currentprice.json', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  response.send(`current bitcoin price is $${body.bpi.USD.rate} (${body.bpi.USD.description})`);
})

})

app.get('/:currency', (req, response) => {
  request('http://api.coindesk.com/v1/bpi/currentprice.json', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  response.send(`current bitcoin price is $${
    body.bpi[req.params.currency].rate
  } (${body.bpi[req.params.currency].description})`);
})
})

app.get('/levi', (req, res) => res.sendFile(__dirname +
  '/levi.html'
))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))