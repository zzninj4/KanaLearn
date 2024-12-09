const database = [
    
]

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.get('/', (request, response) =>{
    response.send('Hello World');
});

app.post('/register', (request, response) =>{
    let {email, password, login} = request.body
    database.push({email, login, password})
    response.send('User registered successfully!')
});


app.listen(900)