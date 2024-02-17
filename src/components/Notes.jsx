
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { add, deleteU } from '../redux/DataSlice';
import { Toast } from 'bootstrap';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
// import { Form } from 'react-router-dom';
function Notes() {
  let navigate = useNavigate()
    let note = useSelector((state)=>state.note)
    let [heading , setNoteTitle]= useState("")
    let [paragraph , setNoteParagraph] = useState("")
    let [dataNote, setDataNote] = useState(note)
    let dispatch = useDispatch(note)
   useEffect(()=>{
console.log(dataNote)
   },[dataNote])
    
    
    // const [date, setDate] = useState(new Date());
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setDate(new Date());
    //     }, 10000);
    
    //     return () => clearInterval(interval);
    //   }, []);
   


let handleDelete = (id)=>{
  let si = [...note]
  let nes =si.splice(id,1)
  setDataNote(nes)

  console.log(nes)

  let neDt =si.filter((news) => news.id !== id)
  

 
  //setDataNote(nes)  
   let maping = si.filter((e)=>{
    return e.id !== id
    
   })

  //  setDataNote(maping)
   dispatch(deleteU(nes))
   

   console.log(maping)
 
 
}

      let createTask = (e)=>{
        e.preventDefault();
        let payload = {
          heading,
          paragraph,
          since:' just now'
          // status: false
        }
        if(payload.heading.length > 0 && payload.paragraph.length >0){
          dispatch(add(payload))
          setDataNote(note)
          toast.success("Notes added Success")
          navigate('/')
        }
        else if(payload.heading.length === 0){
          toast.warning("Unable to add with empty heading!")
        }
        else if(payload.paragraph.length === 0){
          toast.warning("Unable to add with empty Paragraph!")
        }
        
        console.log(note)
    
      }
      useEffect(()=>{
  
        setDataNote(note)
        dataNote
      },[dataNote],[handleDelete])
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
  return <div className="container-fluid " >
    <div className="form_add_notes mt-4 p-2  rounded shadow">
        <div className="topic_add_notes d-flex justify-content-between p-2">
            <p style={{fontWeight:'600',fontSize:'32px', opacity:'80%'}}>Add Note </p>
            <p onClick={()=>navigate('/home')}><i class="fa-solid fa-x"></i></p>
        </div>
        <div className="tile_notes">
          <form onSubmit={createTask}>
            <input
              className="form-control  titlePlaceholder"
              type="text"
              placeholder="Title"
              onChange={(e)=>setNoteTitle(e.target.value)}
            /><br/>
            <textarea
              className="form-control  notesPlaceholder "
              rows="3"
              placeholder="Take a note...."
              onChange={(e)=>setNoteParagraph(e.target.value)}
              ></textarea>
              <button className='rounded btn btn-outline-primary'  type='submit' > Add </button>
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
              &nbsp;My Notes
            </span>
            <p
              style={{
                color: "var(--accent, #203562)",
                fontSize: "16px",
                fontWeight: "600",
                padding: "1em 1em 0em 0.25em",
                opacity:'70%'
              }}
            >
              Recently viewed &nbsp;<span><i onClick={reload()} class="fa-solid fa-rotate-right"></i></span>
            </p>
          </div>
        <div className="d-flex flex-row flex-nowrap overflow-auto " style={{paddingBottom:'5em'}}>
            {
            dataNote.map((e,i) => {
              return <div style={{ minWidth: "350px" }} key={e.id} >
                    <div
                      className="card  customCard shadow-lg rounded-lg"
                      style={{ maxWidth: "16rem", borderRadius: "16px" ,backgroundColor:'#F5F5F5'}}
                    >
                      <div
                        className="card-header  d-flex justify-content-between "
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
                            color: "var(--accent, #203562)",
                            fontSize: "24px",
                            fontWeight: "600",
                          }}
                        >
                          {e.heading}{" "}
                        </p>
                        <h5>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none" 
                            onClick={()=>navigate(`/edit/${i}`)}
                          >
                            <mask
                              id="mask0_209_47"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_209_47)">
                              <path
                                d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z"
                                fill="#203562"
                              />
                            </g>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            onClick={()=>handleDelete(i)}
                          >
                            <mask
                              id="mask0_209_51"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_209_51)">
                              <path
                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                fill="#203562"
                              />
                            </g>
                          </svg>
                        </h5>
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
                          {e.paragraph}
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
                          {e.since}
                        </p>
                      </div>
                    </div>
                  </div>
                
              
            })}
          </div>
        </div>
  </div>

}

export default Notes