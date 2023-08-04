import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  work:[],
  filterWork:[],
  filterWork2:[],
  isLoading:false
}

export const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {

    startIsLoading:(state)=>{
        state.isLoading=true

    },
    allWork:(state,action) => {
      state.isLoading = false
      state.work =  action.payload.resultWork // para renderizar en home
      state.filterWork=action.payload.resultWork // para el filtro por nombre
      state.filterWork2=action.payload.resultWork // para el filtro por precio

    },

    filterName:(state, action)=>{
        //! para ordenar por nombre  se tiene que filtrar "state.filterWork" ya que aqui se guradan los datos cuando se renderiza la pagina y cuando se guarda los datos del filtro por precio
       
        let newData=[]
        if(action.payload === "A-Z") newData = state.filterWork.sort((a,b)=>a.title.localeCompare(b.title))
    
        else if(action.payload === "Z-A") newData = state.filterWork.sort((a,b)=>b.title.localeCompare(a.title))
        
        else newData =state.filterWork2

        state.work = newData

    },

    filterPrice:(state,action)=>{
      console.log(action.payload)

        //! para el filtrado por ´precio se hace a partir de la copia "state.filterWork" y estos valores se guardan en "" para usarlo en el filtro por nombre y en " state.work" para renderizarlo en home
        let dataPrice=[]

        if(action.payload === "menos de 50$") dataPrice= state.filterWork2.filter(element=>element.price<=50)
        
        else if(action.payload === "50$-100$") dataPrice= state.filterWork2.filter(element=>element.price>50 && element.price<=100)

        else if(action.payload === "100$-200$")dataPrice= state.filterWork2.filter(element=>element.price>100 && element.price<=200)
        
        else if(action.payload === "200$-mas")dataPrice= state.filterWork2.filter(element=>element.price>200)

        else dataPrice =state.filterWork2
       

        state.work=dataPrice
        state.filterWork=dataPrice
    },

    filterTypeWork:(state,action)=>{
      if(action.payload === "all") state.work =state.filterWork2
      else{
        const dataWork=state.filterWork.filter(element=>element.category===action.payload)
        state.work = dataWork
      }

      

    }
  },
})

export const { startIsLoading,allWork,filterName,filterPrice,filterTypeWork } = workSlice.actions

//export default workSlice.reducer