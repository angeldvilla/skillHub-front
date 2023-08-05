import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  work: [],
  filterWork: [],
  filterWork2: [],
  filterWork3: [],
  filterWork4: [],
  filterWork5:[],
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
      state.filterWork4 = action.payload.resultWork; // para el tipode trabajo hacia precio
      state.filterWork5 = action.payload.resultWork; // para el tipode trabajo hacia precio
    },

    filterName: (state, action) => {
        action.payload === "A-Z" ? state.work.sort((a, b) =>a.title.localeCompare(b.title)) : state.work.sort((a, b) =>b.title.localeCompare(a.title));
    },

    //!FILTRO POR PRECIO
    filterPrice: (state, action) => {

        let dataPrice = [];
        let typePrice;
        let priceConditioned

        state.filterWork4.length === 0 ? typePrice = state.filterWork2 : typePrice = state.filterWork4

        if (action.payload === "menos de 50$"){
            dataPrice = typePrice.filter((element) => element.price <= 50)
            priceConditioned= state.filterWork3.filter((element) => element.price <= 50)
        }
        else if (action.payload === "50$-100$"){
            dataPrice = typePrice.filter((element) => element.price >= 50 && element.price <= 100)
        priceConditioned= state.filterWork3.filter((element) => element.price >= 50 && element.price <= 100)

        }

        else if (action.payload === "100$-200$"){
            dataPrice = typePrice.filter((element) => element.price >= 100 && element.price <= 200)
            priceConditioned= state.filterWork3.filter((element) => element.price >= 100 && element.price <= 200)
        }

        else if (action.payload === "200$-mas"){
            dataPrice = typePrice.filter((element) => element.price > 200)
            priceConditioned= state.filterWork3.filter((element) => element.price > 200)
        }
        else {dataPrice = typePrice
              priceConditioned=typePrice};

        state.work = dataPrice;
        state.filterWork = dataPrice;
        state.filterWork5 = priceConditioned;
    },

    //!FILTRO POR TIPO DE TRABAJO
    filterTypeWork: (state, action) => {
        
        // SE GUARDA EN UN ESTADO PARA USARLO CUANDO FILTRAMOS(COMO CONDICIONAL) POR PRECIO
        state.filterWork4 = state.filterWork3.filter(ele=>ele.category === action.payload)
        
        // SA HACE UNA CONDICIONAL PARA SABER QUE DATOS VAMOS A FILTRAR
        let typeWorkConditioned
        state.filterWork5.length ===0 ? typeWorkConditioned = state.filterWork : typeWorkConditioned = state.filterWork5
         
        //RESPUESTA
        action.payload === "all" ? state.work = typeWorkConditioned : state.work = typeWorkConditioned.filter((element) => element.category === action.payload);
    },
    
    getWorkName: (state, action) => {
        let workFound=state.filterWork.filter(element=>element.title.includes(action.payload))
        state.work = workFound
        state.filterWork= workFound;
        state.filterWork2 = workFound;
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