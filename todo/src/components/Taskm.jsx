import { useState } from 'react'
import './Taskm.css'

function Taskm(){
    const [newtsk,setNewtsk]=useState('');
    const [task,settask]=useState([]);
    const [show,setshow]=useState(false);

    function handleOnChange(e){
        setNewtsk(e.target.value);
    }
    function handleAddTask(){
        if(newtsk.trim()=='') return;
        settask([...task,newtsk]);
        setNewtsk('');
    }
    function handleClick(){
        setshow(true);
    }
    function handelDelete(index){
        const updatedTasks=task.filter((_,i)=>i!==index);
        settask(updatedTasks);
    }

    return (
        <div className="main">
        <div className="main_add">
            <div className="addtsk_in">
                <label>Enter Your Task:</label>
                <input type="text" placeholder='Enter new task...' value={newtsk} onChange={handleOnChange}/>
            </div>
            <div className="btnadd">
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
        <div className="showTaskBox">
            <div id="showbtn"><button onClick={handleClick}>Show Task</button></div>

            {show&&<div className="main_show">
                <div id="listheading">YOUR TASKS</div>

                {task.length===0 ? show &&<div id="noTask">There is no task scheduled by you..</div> : show && 
                <ul id='taskList'>
                    {task.map((t,index)=>(
                        <li class='listItem' key={index}>
                            <div id="tsk">{t}</div>
                            <div id="btn"><button id="deleteBtn"onClick={()=>handelDelete(index)}>Delete</button></div>
                        </li>
                    ))}
                </ul>}
                </div>}


        </div>
        </div>
    )
}

export default Taskm