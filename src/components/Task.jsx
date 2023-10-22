import React from 'react'
import { useNavigate } from 'react-router-dom'

function Task() {
    let taskData = [
        {
            checked:true,
            task:'File upload',
            duration:'2 days left',
            starFill:true
        },
        {
            checked:false,
            task:'System update',
            duration:'5 days left',
            starFill:true
        },
        {
            checked:false,
            task:'Quality check',
            duration:'10 days left',
            starFill:false
        },
        {
            checked:false,
            task:'Charger change',
            duration:'12 days left',
            starFill:false
        }
    ]
    let navigate = useNavigate()
  return <div className="container-fluid">
        <div className="form_add_notes mt-4 p-2  rounded shadow">
        <div className="topic_add_notes d-flex justify-content-between p-2">
            <p style={{fontWeight:'600',fontSize:'32px', opacity:'80%'}}>Add Task </p>
            <p onClick={()=>navigate('/home')}><i class="fa-solid fa-x"></i></p>
        </div>
        <div className="tile_notes">
            <input
              className="form-control  titlePlaceholder"
              type="text"
              placeholder="Title"
              // onChange={(e)=>setHeading(e.target.value)}
            /><br/>
            <textarea
              className="form-control  notesPlaceholder "
              rows="3"
              placeholder="Take a note...."
            //   onChange={(e)=>setParagraph(e.target.value)}
              ></textarea>

              <div>
                <div className="task_time  m-2   align-items-center">
               <input type="datetime-local"  placeholder='Date/Time'  className='task_time'/>
                </div>
                
      
    </div>
        </div>
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