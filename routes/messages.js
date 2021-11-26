const express = require('express')

let router = express.Router()

let messages = []

//get format for all 
router.get('/', (req, res) =>{
    return res.status(200).json(
        messages
    )
})

//get format by id
router.get('/:messageId',(req,res)=>{
    console.log(req.params.messageId)
    return res.status(200).json({"messageId": req.params.messageId})
})

//post format
router.post('/',(req,res)=>{
    const message = req.body
    messages.push(message)
    res.status(200).json(message)
})

module.exports = router