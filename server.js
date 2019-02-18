const http = require('http')
const fs = require('fs')
const url = require('url')
const EventEmitter = require('events')

let App = {
    start: (port) => {
        let emitter = new EventEmitter()
        let server = http.createServer((request, response) =>{

            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })

            if (request.url === '/') {
                emitter.emit('root', response)
            }

            response.end()
        }).listen(port)

        return emitter
    }
}

let app = App.start(8000)

app.on('root', (response) => {
    response.write('root')
})
