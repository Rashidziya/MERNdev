import { useState,useEffect } from "react";
import axios from "axios";
function useTodo(){
    const [todo,setTodo]=useState([]);
    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(function (res){
          setTodo(res.data.todos);
        })
      },[]);
      return todo;
}

export default useTodo;
