const express=require('express')
const cors=require('cors')
const mongoose = require('mongoose')
const Comment=require('./requests/schema')
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/comments', (req,res)=>{
    Comment.find({}).then(comment=>res.json(comment))
})

app.post('/comments', (req, res)=>{
    const body=req.body
    const comment=new Comment({content: body.content, date: new Date()})
    comment.save().then(result=>{
        console.log("Comment saved.")
        mongoose.connection.close()

    })})
    


app.get('/json', (req, res)=>res.sendFile('./data.json',{root: __dirname}))
app.listen(5000, ()=>console.log("Listening on port 5000..."))