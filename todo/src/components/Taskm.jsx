import { useState } from 'react'
import './Taskm.css'

function Taskm(){
    const [atask,task]=useState("");

    function handleOnChange(e){
        task(e.target);
    }

    return (
        <div className="main">
        <div className="main_add">
            <div className="addtsk_in">
                <label>Enter Your Task:</label>
                <input type="text" placeholder='Enter new task...' onChange={handleOnChange}/>
            </div>
            <div className="btnadd">
                <button>Add Task</button>
            </div>
        </div>
        </div>
    )
}

export default Taskm