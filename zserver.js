const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer()

server.on('request', (request, response) => {
    response.writeHead(200)
    let query = url.parse(request.url, true).query

    let name = query.name === undefined ? 'undefined' : query.name

    fs.readFile('index.html', 'utf8', (err,data) => {
        if (err) {
            response.writeHead(404)
            response.end("fail")
        }
        else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })

            data = data.replace("{{ data }}", name)

            response.end(data)
        }
    })
});

server.listen(8000)