const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => { 
    res.sendFile(__dirname + 'home.html')
})

app.get('/about', (req, res, next) => { 
    res.sendFile(__dirname + 'about.html')
})

app.get('/works', (req, res, next) => { 
    res.sendFile(__dirname + 'works.html')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})