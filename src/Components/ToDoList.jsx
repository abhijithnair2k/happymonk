import react from "react"
import { useEffect,useState} from "react";
import axios from "axios";
import style from "./todolist.module.css"
import {Link} from "react-router-dom";

const ToDoList=()=>{
    let [content,setContent]=useState([])

    useEffect(()=>{
    axios.get("http://localhost:3000/user")
    .then((response)=>{
        console.log(response.data);
        console.log("data updating");
        setContent(response.data)

    }).catch(()=>{
        console.log("not updated");
    })
    },[])
    let deleteData=(value)=>{
        axios.delete(`http://localhost:3000/user/${value}`)
        window.location.assign("/User")
    }




    return(
        <div id={style.userpage}>
        {content.map((x)=>{
            return(
                
                 <section id={style.user} >
                    <tr>
                        <th>user{x.id}</th>
                    </tr>
                    <tr>
                        <th>user{x.heading}</th>
                    </tr>
                    
                    <tr>
                        <td >Task</td>
                        <td>{x.task}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>{x.date}</td>
                    </tr>
                    <tr>
                        <td>Time</td> 
                        <td>{x.time}</td>
                    </tr>

                    <Link to={`/edituser/${x.id}`}>EDIT</Link>
                    <button onClick={()=>{deleteData(x.id)}}>DELTE</button>
                </section>
            )

        })}
        </div>

    )
}
export default ToDoList
