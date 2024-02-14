import axios from 'axios'

const baseUrl="http://localhost:5000";

const getAllTodo = (setTodo)=>{
    axios
    .get(baseUrl)
    .then(({data}) =>{
        console.log("data--->",data);
        setTodo(data)
        // getAllTodo(setTodo)
    })
}

const addToDO = (text,setText,setTodo) =>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("");
        getAllTodo(setTodo)
    })
    .catch(err=>console.log(err))
}

const updateToDO = (todoId,text,setTodo,setText,setUpdate) =>{
    axios
    .put(`${baseUrl}/update`,{_id:todoId,text})
    .then((data)=>{
        console.log(data);
        setText("");
        setUpdate(false)
        getAllTodo(setTodo)
    })
    .catch(err=>console.log(err))
    
}
const deleteToDO = (_id,setTodo) =>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
       getAllTodo(setTodo)
    })
    .catch(err=>console.log(err))
}
export{getAllTodo,addToDO,updateToDO,deleteToDO}