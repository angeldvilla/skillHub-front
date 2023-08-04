import { createSlice } from "@reduxjs/toolkit";

const allPublicationsWork = [
    {
        id: "1",
        titulo: "Lavar techo terraza",
        descripción: "Se necesita una persona con habilidades de limpieza en zonas altas",
        precio: "250000",
        tipoTrabajo: [],
        img: "",
        ubicación: [],
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