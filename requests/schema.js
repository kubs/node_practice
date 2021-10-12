const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hui:!5iCF.-A_y_YWEE@cluster0.6juc3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then((err, res)=>{ if(err) console.log(err); console.log("connected to DB.")});
const commentSchema=new mongoose.Schema({content: String, date: Date})

module.exports= mongoose.model("Comment", commentSchema)