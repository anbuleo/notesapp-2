import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from '../redux/TaskSlice'


function Task() {
  let task = useSelector((state)=>state.task)
  let [taskData,setTaskData]=useState(task)
  let fileRef = useRef(null)
  let textA = useRef(null)
  let tileRef = useRef(null)
  let [title,setTitle] = useState("")
  let [taskNote,setTaskNote] = useState("")
  let dispatch = useDispatch(task)
    // let taskData = [
    //     {
    //         checked:true,
    //         task:'File upload',
    //         duration:'2 days left',
    //         starFill:true
    //     },
    //     {
    //         checked:false,
    //         task:'System update',
    //         duration:'5 days left',
    //         starFill:true
    //     },
    //     {
    //         checked:false,
    //         task:'Quality check',
    //         duration:'10 days left',
    //         starFill:false
    //     },
    //     {
    //         checked:false,
    //         task:'Charger change',
    //         duration:'12 days left',
    //         starFill:false
    //     }
    // ]
    let navigate = useNavigate()
    let handleSubmit = (e)=>{
      e.preventDefault();
        let payload = {
          checked:true,
          task:title,
          duration:'2 Days left',
          starFill:true
          // status: false
        }
        dispatch(add(payload))
        console.log(payload,task)
        setTaskData(task)
    }
   
   
  return <div className="container-fluid">
        <div className="form_add_notes mt-4 p-2  rounded shadow">
        <div className="topic_add_notes d-flex justify-content-between p-2">
            <p style={{fontWeight:'600',fontSize:'32px', opacity:'80%'}}>Add Task </p>
            <p onClick={()=>navigate('/home')}><i className="fa-solid fa-x"></i></p>
        </div>
        <form ref={fileRef} onSubmit={handleSubmit}><div   className="tile_notes">
            <input
              className="form-control  titlePlaceholder"
              type="text"
              placeholder="Title"
              onChange={(e)=>setTitle(e.target.value)} onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                  textA.current.focus()
                }
              }}
            /><br/>
            
            <textarea
              ref={textA}
              className="form-control  notesPlaceholder "
              rows="3"
              placeholder="Take a note...."
              onChange={(e)=>setTaskNote(e.target.value)}
              
              
              > 
                  
              </textarea>
              <button className='rounded m-2'>&gt;</button>
              

              <div>
                <div className="task_time  m-2   align-items-center">
               <input type="datetime-local"  placeholder='Date/Time'  className='task_time'/>

                </div>
                
      
    </div>
        </div>
        </form>
        
    </div>
    <div className="my_task mt-4">
        <div className="mainTopic mb-4">
            <span className="myNotes ">
            <i className="fa-solid fa-circle-check align-self-center"></i>
              &nbsp;My Task
            </span>
            
          </div>
          <div className="form-group bg-white p-4 rounded">
           {
            taskData.map((e,i)=>{
                return  <div className=" d-flex justify-content-between shadow-lg p-3 mb-4 bg-white rounded  " key={i}>
                <div className="d-flex gap-3">
                <div className="icon align-self-center gap-2"><i className={e.checked?"fa-regular fa-circle-check align-items-center":"fa-regular fa-circle align-items-center"}></i></div>
                <div className="">{e.task} <br /> {e.duration}</div>
                </div>
                <div className="align-self-center"><i className={e.starFill?"fa-solid fa-star":"fa-regular fa-star"}></i></div>
            </div>
            })
           }
          </div>

        </div>
  </div>
}

export default Task