var express = require('express')

var app = express()
const port = 8000

app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('Listening to: '+port);
    
})