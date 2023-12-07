import {  createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
    name:'task',
    initialState:[
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
    ],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
            console.log(action.payload,state)
        }
    }
})
export const {add} = TaskSlice.actions
export default TaskSlice.reducer