import { createSlice } from "@reduxjs/toolkit";

const allPublicationsWork = [
    {
        id: "64d026bc2e300d5a0a6b2479",
        title: "Lavar terraza ",
        description: "Se necesita una persona para lavar una terraza de 6*15",
        price: "25000",
        ability: "Limpieza interiores",
        image: "",
        address: "Cali,Col",
        phone: "3057189737",
        users: "",
      }
]

export const WorkPublicationSlice = createSlice({
    name: "formwork",
    initialState: {
        allPublicationsWork,
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
       const findWork =  state.allPublicationsWork.find((work)=> work.id === action.payload)

       if (findWork !== -1) {
        state.allPublicationsWork.splice(findWork, 1);
      }
        }
    }
})

export const {AddWorks, DeleteWorks, GetAllWorkTypes} = WorkPublicationSlice.actions 

export default WorkPublicationSlice.reducer //Aquí mando todo lo que contiene el reducer