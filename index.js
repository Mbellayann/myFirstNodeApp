const express = require('express')
const messagesRoute = require('./routes/messages')
const bodyParser = require('body-parser')
const morgan = require('morgan')


const app = express()


app.use(morgan('dev'))
app.use(bodyParser.json({
    extended: true
}))
app.use('/api/messages', messagesRoute)

app.get('/', (req, res)=>{
    //res.res.status(200).json({"msg":"hello world !"})
    return res.status(200).send('<h1>Hello world</>')
})

app.listen(5000, () => {
    console.log('server rruning on http://localhost:5000')
})