import react from "react"
import {useState,useEffect  } from "react";
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios";
import style from "./todolist.module.css"
const EditToDoList=()=>{

    let[task,setTask]=useState("")
    let[date,setDate]=useState("")
    let[time,setTime]=useState("")
    let[heading,setHeading]=useState("")

    let  {index} =useParams()
    let HeadData=(e)=>{
        setHeading(e.target.value)
    }
    

    let nameData=(e)=>{
        setTask(e.target.value)
    }
    let salaryData=(e)=>{
        setDate(e.target.value)
    }

    let companyData=(e)=>{
        setTime(e.target.value)
    }

    let FormHandle=(e)=>{
        let payload={task,date,time,heading}
        e.preventDefault()
        axios.put(`http://localhost:3000/user/${index}`,payload)
        .then(()=>{
            console.log("sucessfully edited");

        }).catch(()=>{
            console.log("did not edited");
        })
        
    } 
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${index}`)
        .then((response)=>{
            console.log(response.data);
            setTask(response.data.task)
            setDate(response.data.date)
            setTime(response.data.time)
            setHeading(response.data.heading)


        }).catch(()=>{
            console.log("fetched");
        })
    },[])

    
    return(
        <section  id={style.createuser}>
            <article>
            <form action="">
                <h1>edit Task</h1>
                <tr>
                <td><label htmlFor="">Title</label></td>
                <td><input type="text" value={heading} onChange={HeadData}  /></td>
                </tr>
               
                <tr>
                <td><label htmlFor="">Name</label></td>
                <td><input type="text" value={task} onChange={nameData}  /></td>
                </tr>
                <tr>
                <td><label htmlFor="">Salary</label></td>
                <td><input type="date"  value={date} onChange={salaryData} /></td>
                </tr>
                <tr>
                <td> <label htmlFor="">Company</label></td>
               <td> <input type="text"  value={time} onChange={companyData} /></td>
                </tr>
                <button onClick={FormHandle}>SUBMIT</button>
            </form>
            </article>
           
        </section>

    )
}
export default EditToDoList
