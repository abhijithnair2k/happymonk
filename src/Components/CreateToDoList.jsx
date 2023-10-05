import style from "./todolist.module.css"
import react from "react"
import {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const CreateToDoList=()=>{
    let[heading,setHeading]=useState("")

    let[task,setTask]=useState("")
    let[date,setDate]=useState("")
    let[time,setTime]=useState("")
     let navigate=useNavigate()


     let HeadData=(e)=>{
        setHeading(e.target.value)
    }
   
    let taskData=(e)=>{
        setTask(e.target.value)
    }
    let dateData=(e)=>{
        setDate(e.target.value)
    }
    let timeData=(e)=>{
        setTime(e.target.value)
    }
    let FormHandle=(e)=>{
        // e.preventDefault()
        let payload={task,date,time}
        axios.post("http://localhost:3000/user",payload)
        .then(()=>{
            console.log("sucess");
        })
        .catch(()=>{
            console.log("unsucess");
        })
        navigate("/user")
    }
    
    
    return(
        <section  id={style.createuser}>
            <article>
            <form action="">
                <h1>ToDoList </h1>
                <tr>
                <td><label htmlFor="">Heading</label></td>
                <td><input type="text" value={heading} onChange={HeadData}  /></td>
                </tr>
                
                <tr>
                <td><label htmlFor="">Task</label></td>
                <td><input type="text" value={task} onChange={taskData}  /></td>
                </tr>
                <tr>
                <td><label htmlFor="">Date</label></td>
                <td><input type="date"  value={date} onChange={dateData} /></td>
                </tr>
                <tr>
                <td> <label htmlFor="">Time</label></td>
               <td> <input type="text"  value={time} onChange={timeData} /></td>
                </tr>
                <button onClick={FormHandle}>SUBMIT</button>
            </form>
            </article>
           
        </section>
    )
}
export default CreateToDoList
