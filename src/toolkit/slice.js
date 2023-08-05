import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  work: [],
  filterWork: [],
  filterWork2: [],
  filterWork3: [],
  filterWork4: [],
  isLoading: false,
};

export const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    startIsLoading: (state) => {
      state.isLoading = true;
    },
    allWork: (state, action) => {
      state.isLoading = false;
      state.work = action.payload.resultWork; // para renderizar en home
      state.filterWork = action.payload.resultWork; // para el filtro por nombre
      state.filterWork2 = action.payload.resultWork; // para el filtro por precio
      state.filterWork3 = action.payload.resultWork; // para el tipode trabajo hacia precio
    },

    filterName: (state, action) => {
      //! para ordenar por nombre  se tiene que filtrar "state.filterWork" ya que aqui se guradan los datos cuando se renderiza la pagina y cuando se guarda los datos del filtro por precio

    action.payload === "A-Z" ? state.work.sort((a, b) =>a.title.localeCompare(b.title)) : state.work.sort((a, b) =>b.title.localeCompare(a.title));
    },

    filterPrice: (state, action) => {
    
      let dataPrice = [];
      let typePrice;
      console.log(state.filterWork4)

         state.filterWork4.length === 0 ? typePrice = state.filterWork2 : typePrice = state.filterWork4

      //! para el filtrado por ´precio se hace a partir de la copia "state.filterWork" y estos valores se guardan en "" para usarlo en el filtro por nombre y en " state.work" para renderizarlo en home

      if (action.payload === "menos de 50$")
        dataPrice = typePrice.filter((element) => element.price <= 50);
      else if (action.payload === "50$-100$")
        dataPrice = typePrice.filter(
          (element) => element.price >= 50 && element.price <= 100
        );
      else if (action.payload === "100$-200$")
        dataPrice = typePrice.filter(
          (element) => element.price >= 100 && element.price <= 200
        );
      else if (action.payload === "200$-mas")
        dataPrice = typePrice.filter((element) => element.price > 200);
      else dataPrice = typePrice;

      state.work = dataPrice;
      state.filterWork = dataPrice;
    },

    filterTypeWork: (state, action) => {

      let dataWork = []
      let arrayy=state.filterWork3.filter(ele=>ele.category === action.payload)
 
      if (action.payload === "all") dataWork = state.filterWork;
      else {
        dataWork = state.filterWork.filter(
          (element) => element.category === action.payload
        );
      }
      state.work = dataWork;
      state.filterWork4 = arrayy;
      
    },
    
    getWorkName: (state, action) => {
      let workFound=state.filterWork.filter(element=>element.title.includes(action.payload))
      state.work = workFound
    }
  },
});

export const {
  startIsLoading,
  allWork,
  getWorkName,
  filterName,
  filterPrice,
  filterTypeWork,
} = workSlice.actions;

//export default workSlice.reducer