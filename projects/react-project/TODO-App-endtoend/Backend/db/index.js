const mongoose=require('mongoose');
// const { string, boolean } = require('zod');

mongoose.connect("mongodb+srv://Rashid_ziya:ziya123@firstmongocluster.cvtu1hx.mongodb.net/Todo-endtoend-App");

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const Todos=mongoose.model('Todo',todoSchema);

module.exports={
    Todos
}

