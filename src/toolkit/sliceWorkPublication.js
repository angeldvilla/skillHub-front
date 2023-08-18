import { createSlice } from "@reduxjs/toolkit";

export const WorkPublicationSlice = createSlice({
    name: "formwork",
    initialState: {
        allPublicationsWork : [],
        allWorkTypes : []
    },
    reducers: {
        AddWorks:(state, action) => {
            state.allPublicationsWork.push(action.payload) 
        },
        GetAllWorkTypes: (state, action) => {
            state.allWorkTypes = action.payload
          },
          DeleteWorks: (state, action) => {
            state.allPublicationsWork = state.allPublicationsWork.filter(work => work._id !== action.payload);
        }
        
    }
})

export const {AddWorks, DeleteWorks, GetAllWorkTypes} = WorkPublicationSlice.actions 

export default WorkPublicationSlice.reducer //Aquí mando todo lo que contiene el reducer