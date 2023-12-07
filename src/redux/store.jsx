import { configureStore } from "@reduxjs/toolkit";
import  dataReducer  from "./DataSlice";
import  TaskSlice  from "./TaskSlice";

export default configureStore({
   reducer : {
    note : dataReducer,
    task : TaskSlice
   }
})
   
