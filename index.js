const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.status(200).send('<h1>Hello world</>')
})

app.listen(5000, () => {
    console.log('server rruning on http://localhost:5000')
})