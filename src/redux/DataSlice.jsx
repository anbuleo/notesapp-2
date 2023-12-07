import { createSlice } from "@reduxjs/toolkit";

export const dataReducer = createSlice({
    name: 'note',
    initialState:[
        {   
            id:0,
            heading: "Feedback",
            paragraph:
              "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
            since: "5 days ago",
          },
          {
            id:1,
            heading: "Weekly Task",
            paragraph:
              "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
            since: "2 weeks ago",
          },
          {
            id:2,
            heading: "Lyrics",
            paragraph:
              "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
            since: "3 weeks ago",
          },
          {
            id:3,
            heading: "Loren ipsum",
            paragraph:
              "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
            since: "3 weeks ago",
          },
    ],
    reducers:{
        add:(state,action)=>{

       
         let id = state[state.length - 1].id +1
        // let prevId = state[state.length-1].id
        // action.payload.id=id
     
         console.log(id)
                action.payload.id=id
                state.push(action.payload)
                console.log(action.payload)
                console.log(state[4])

        },
        deleteU : (state,action)=>{
          // let {id} = action.payload[0].id
          let a = action.payload
          let b= a[0].id
          

          // const newState = state.find({})
          const exist = state.find((prestate)=>prestate.id === b)

          console.log(exist)
          if(exist) {
            return state.filter((user)=>   user.id !== b)
            // console.log(av)
            
            
          }
        
        },
        update :(state,action)=>{
          let id = Number(action.payload.id)
        state.splice(id,1,action.payload)
            
        }
    }
})




export const {add, deleteU,update} = dataReducer.actions


export default dataReducer.reducer

