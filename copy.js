const fs = require('fs')

let file = 'img/louis.jpg'

fs.stat(file, (err,stat) => {

    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    let write = fs.createWriteStream('img/copy2.jpg')

    read.on('data', (chunk) => {
        progress += chunk.length   
        console.log('read ' + Math.round(100 * progress / total) + "%")
    })

    read.pipe(write)

    write.on('finish', () => {
        console.log('write end')
        
    })
})