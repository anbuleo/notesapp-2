
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { update} from '../redux/DataSlice';
// import { Form } from 'react-router-dom';
function Edit() {
    let params = useParams()
    let note = useSelector((state)=>state.note)
    
    let [dataNote, setDataNote] = useState(note)
    let {heading,paragraph} = dataNote[params.id]
    let [headingn , setNoteTitle]= useState(heading)
    let [paragraphn , setNoteParagraph] = useState(paragraph)
    let dispatch = useDispatch(note)
   
    let navigate =useNavigate()
    // const [date, setDate] = useState(new Date());
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setDate(new Date());
    //     }, 10000);
    
    //     return () => clearInterval(interval);
    //   }, []);
   





      let createTask = (e)=>{
        e.preventDefault();
        let payload = {
            id:Number(params.id),
          heading:headingn,
          paragraph:paragraphn,
          since:' just now',
          
          // status: false
        }
        dispatch(update(payload))
        // setDataNote(note)
        navigate('/')
        // console.log()
    
      }
      useEffect(()=>{
        headingn
        
        
      })
    //   function handle(e){
    //     // console.log(e.timeStamp)
    //     // let newtime = Date.now()
    //     // console.log(newtime)
       
    //     if(e.inputType === 'insertLineBreak'){
    //         // e.preventDefault(); // Ensure it is only this code that runs
    //           createTask()
    //         // alert("Enter was pressed was presses");
    //     }
    // }

      let day = ()=>{
        
    //    let today =date.toLocaleDateString()
       let newdate = date.getDay()
       if(newdate ===0){
        return 'Today'
       }else {
        return date.getDate()
       }    
      }
      let time = ()=>{
       
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        return strTime;
      }
      let reload  = ()=>{
        

      }
    //   let data = [
    //     {
    //         heading: "Feedback",
    //         paragraph:
    //           "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
    //         since: "5 days ago",
    //       },
    //       {
    //         heading: "Weekly Task",
    //         paragraph:
    //           "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
    //         since: "2 weeks ago",
    //       },
    //       {
    //         heading: "Lyrics",
    //         paragraph:
    //           "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
    //         since: "3 weeks ago",
    //       },
    //       {
    //         heading: "Loren ipsum",
    //         paragraph:
    //           "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
    //         since: "3 weeks ago",
    //       },
    // ]
  return <div className="container-fluid p-4 " >
    <div className="form_add_notes mt-4 p-2  rounded shadow">
        <div className="topic_add_notes d-flex justify-content-between p-2">
            <p style={{fontWeight:'600',fontSize:'32px', opacity:'80%'}}>Edit Note </p>
            <p onClick={()=>navigate('/home')}><i className="fa-solid fa-x"></i></p>
        </div>
        <div className="tile_notes">
          <form onSubmit={createTask}>
            <input
              className="form-control  titlePlaceholder"
              type="text"
              placeholder="Title"
              value={headingn}
              onChange={(e)=>setNoteTitle(e.target.value)}
            /><br/>
            <textarea
              className="form-control  notesPlaceholder "
              rows="3"
              placeholder="Take a note...."
              value={paragraphn}
              onChange={(e)=>setNoteParagraph(e.target.value)}
              ></textarea>
              <button className='rounded '  type='submit'>&gt;</button>
             </form>
              <div>
                <div className="time_day   m-2   align-items-center">
                <p><i class="fa-regular fa-clock"></i> Date / Time</p>
                </div>
                <div className="icons_edit d-flex gap-4 m-2 pt-2">
                    <p><i class="fa-solid fa-text-height"></i></p>
                    <p><i class="fa-solid fa-fill-drip"></i></p>
                    <p><i class="fa-solid fa-list"></i></p>
                    <p><i class="fa-solid fa-underline"></i></p>
                    <p><i class="fa-solid fa-align-left"></i></p>
                    <p><i class="fa-solid fa-rotate-left"></i></p>
                    <p><i class="fa-solid fa-rotate-right"></i></p>
                </div>
      
    </div>
        </div>
    </div>
    <div className="notes_car mt-4">
        <div className="mainTopic">
            <span className="myNotes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <mask
                  id="mask0_209_12"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                >
                  <rect width="32" height="32" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_209_12)">
                  <path
                    d="M10.6667 24H21.3333V21.3333H10.6667V24ZM10.6667 18.6667H21.3333V16H10.6667V18.6667ZM8.00001 29.3333C7.26668 29.3333 6.6389 29.0722 6.11668 28.55C5.59445 28.0278 5.33334 27.4 5.33334 26.6667V5.33333C5.33334 4.6 5.59445 3.97222 6.11668 3.45C6.6389 2.92778 7.26668 2.66667 8.00001 2.66667H18.6667L26.6667 10.6667V26.6667C26.6667 27.4 26.4056 28.0278 25.8833 28.55C25.3611 29.0722 24.7333 29.3333 24 29.3333H8.00001ZM17.3333 12V5.33333H8.00001V26.6667H24V12H17.3333Z"
                    fill="#203562"
                  />
                </g>
              </svg>
              &nbsp;Preview
            </span>
            
          </div>
        <div className="d-flex flex-row flex-nowrap overflow-auto " style={{paddingBottom:'5em'}}>
            {
            
               <div style={{ minWidth: "350px" }}  >
                    <div
                      className="card  customCard shadow-lg rounded-lg"
                      style={{ maxWidth: "16rem", borderRadius: "16px" ,backgroundColor:'#F5F5F5'}}
                    >
                      <div
                        className="card-header   "
                        style={{ 
                            backgroundColor:'#F5F5F5',
                          borderBottom: "none !important",
                          color: "#203562",
                          padding: "20px",
                          paddingBottom: "0em",
                        }}
                      >
                        <p
                          style={{
                            textAlign: "center",
                            color: "var(--accent, #203562)",
                            fontSize: "24px",
                            fontWeight: "600",
                          }}
                          
                        >
                          {heading}{" "}
                        </p>
                        
                      </div>
                      <div className="card-body">
                        <p
                          className="card-text"
                          style={{
                            color: "#303030",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          {paragraph}
                        </p>
                      </div>
                      <div
                        className="card-footer "
                        style={{ backgroundColor: "#F5F5F5" }}
                      >
                        <p
                          style={{
                            color: " #000",
                            fontSize: "16px",
                            fontWeight: "500",
                            opacity: "0.6",
                          }}
                        >
                          {'Just Now'}
                        </p>
                      </div>
                    </div>
                  </div>
                
              
            }
          </div>
        </div>
  </div>

}

export default Edit