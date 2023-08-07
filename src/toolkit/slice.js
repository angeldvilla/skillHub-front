import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  work: [],
  filterWork: [],
  filterWork2: [],
  filterWork3: [],
  filterWork4: [],
  filterWork5:[],
  detail: {},
  isAll:false,
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
      //state.filterWork4 = action.payload.resultWork; // para el tipode trabajo hacia precio
      //state.filterWork5 = action.payload.resultWork; // para el tipode trabajo hacia precio
    },

    filterName: (state, action) => {
        action.payload === "A-Z" ? state.work.sort((a, b) =>a.title.localeCompare(b.title)) : state.work.sort((a, b) =>b.title.localeCompare(a.title));
    },

    //!FILTRO POR PRECIO
    filterPrice: (state, action) => {

        let dataPrice = [];
        let typePrice;
        let priceConditioned
        state.isAll=false

        state.filterWork4.length === 0 ? typePrice = state.filterWork2 : typePrice = state.filterWork4

        if (action.payload === "menos de 100$"){
            dataPrice = typePrice.filter((element) => parseInt(element.price) < 100)
            priceConditioned= state.filterWork3.filter((element) => parseInt(element.price) < 100)
        }
        else if (action.payload === "100$-200$"){
            dataPrice = typePrice.filter((element) => parseInt(element.price) >= 100 && parseInt(element.price) <= 200)
        priceConditioned= state.filterWork3.filter((element) => parseInt(element.price) >= 100 && parseInt(element.price) <= 200)

        }

        else if (action.payload === "200$-300$"){
            dataPrice = typePrice.filter((element) => parseInt(element.price) >= 200 && parseInt(element.price) <= 300)
            priceConditioned= state.filterWork3.filter((element) => parseInt(element.price) >= 200 && parseInt(element.price) <= 300)
        }

        else if (action.payload === "400$-mas"){
            dataPrice = typePrice.filter((element) => parseInt(element.price) > 400)
            priceConditioned= state.filterWork3.filter((element) => parseInt(element.price) > 400)
        }
        else {dataPrice = typePrice
              priceConditioned=typePrice
              state.isAll=true};

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

        if(state.isAll===true){
          if(action.payload !== "all") state.work=state.filterWork4
          else state.work=state.filterWork3
        }
        else{
          action.payload === "all" ? state.work = typeWorkConditioned : state.work = typeWorkConditioned.filter((element) => element.category === action.payload)
        }
       
    },
    
    getWorkName: (state, action) => {
        state.work = action.payload
        state.filterWork= action.payload;
        state.filterWork2 = action.payload;
    },

    detailWork: (state, action) => {
      const detailData = action.payload[0] || {};
      state.detail = detailData;
      state.isLoading = false;
    },

    resetDetail: (state) => {
      state.detail = {};
    },

  },
});

export const {
  startIsLoading,
  allWork,
  getWorkName,
  filterName,
  filterPrice,
  filterTypeWork,
  detailWork,
  resetDetail,
} = workSlice.actions;

//export default workSlice.reducer