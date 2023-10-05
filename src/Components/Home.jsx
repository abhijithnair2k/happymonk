import style from "./todolist.module.css"
import {Link  } from "react-router-dom";
const Home=()=>{
    return(
        <section id={style.home}>
             <Link to={"/createuser"} >CreateToDoList</Link>
        
            <Link to={"/user"}>ToDoList</Link>


        </section>
        

    )
}
export default Home