import { createSlice } from "@reduxjs/toolkit";

const allPublicationsWork = [
    {
        id: "1",
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
        allPublicationsWork
    },
    reducers: {
        AddWorks:(state, action) => {
            state.allPublicationsWork.push(action.payload)

        },
        DeleteWorks: (state, action) => {
       const findWork =  state.allPublicationsWork.find((work)=> work.id === action.payload)

       if (findWork !== -1) {
        state.allPublicationsWork.splice(findWork, 1);
      }
        }
    }

})

export const {AddWorks, DeleteWorks} = WorkPublicationSlice.actions 

export default WorkPublicationSlice.reducer //Aquí mando todo lo que contiene el reducer