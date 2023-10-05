import react from 'react'
import {  BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home"

import {Link } from "react-router-dom";
import CreateToDoList from "./Components/CreateToDoList";
import ToDoList from "./Components/ToDoList";
import EditToDoList from "./Components/EditToDoList";
const App=()=>{
    return(
    <div>
            <BrowserRouter>
            <Home/>
            <Routes>

            <Route path="/createuser" element={<CreateToDoList/>}/>
            <Route path="/user" element={<ToDoList/>}/>  
            <Route path="/edituser/:index" element={<EditToDoList/>}/>
            
           </Routes> 
          </BrowserRouter>
          </div>

    )
}
export default App