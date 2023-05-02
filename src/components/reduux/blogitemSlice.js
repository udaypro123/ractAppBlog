import { createSlice } from "@reduxjs/toolkit";



const blogitemSlice=createSlice({
    name:"itemslice",
    initialState:{
        userdata:[],
        createdata:[],
    },
    reducers:{
        addnewitem(state,action){
            state.userdata.push(action.payload)
        },

        addcreatedata(state, action){
            state.createdata.push(action.payload)
        }
    }
})

export default blogitemSlice.reducer;
export const {addnewitem,addcreatedata}=blogitemSlice.actions
