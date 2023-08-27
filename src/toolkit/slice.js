import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  work: [],
  workBackUp: [],
  filterWork: [],
  filterWork2: [],
  filterWork3: [],
  filterWork4: [],
  filterWork5: [],
  detail: {},
  isAll: false,
  isLoading: false,
  currentPage: 1,
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
      state.workBackUp = action.payload.resultWork;
      state.work = action.payload.resultWork; // para renderizar en home
      state.filterWork = action.payload.resultWork; // para el filtro por nombre
      state.filterWork2 = action.payload.resultWork; // para el filtro por precio
      state.filterWork3 = action.payload.resultWork; // para el tipode trabajo hacia precio
    },

    filterName: (state, action) => {
      action.payload === "A-Z"
        ? state.work.sort((a, b) => a.title.localeCompare(b.title))
        : state.work.sort((a, b) => b.title.localeCompare(a.title));
    },

    //!FILTRO POR PRECIO
    filterPrice: (state, action) => {
      let dataPrice = [];
      let typePrice;
      let priceConditioned;
      state.isAll = false;

      state.filterWork4.length === 0
        ? (typePrice = state.filterWork2)
        : (typePrice = state.filterWork4);

      if (action.payload === "menos de 200$") {
        dataPrice = typePrice.filter(
          (element) => parseInt(element.price) < 200
        );
        priceConditioned = state.filterWork3.filter(
          (element) => parseInt(element.price) < 200
        );
      } else if (action.payload === "200$-400$") {
        dataPrice = typePrice.filter(
          (element) =>
            parseInt(element.price) >= 200 && parseInt(element.price) <= 400
        );
        priceConditioned = state.filterWork3.filter(
          (element) =>
            parseInt(element.price) >= 200 && parseInt(element.price) <= 400
        );
      } else if (action.payload === "400$-600$") {
        dataPrice = typePrice.filter(
          (element) =>
            parseInt(element.price) >= 400 && parseInt(element.price) <= 600
        );
        priceConditioned = state.filterWork3.filter(
          (element) =>
            parseInt(element.price) >= 400 && parseInt(element.price) <= 600
        );
      } else if (action.payload === "600$-mas") {
        dataPrice = typePrice.filter(
          (element) => parseInt(element.price) > 600
        );
        priceConditioned = state.filterWork3.filter(
          (element) => parseInt(element.price) > 600
        );
      } else {
        dataPrice = typePrice;
        priceConditioned = typePrice;
        state.isAll = true;
      }

      state.work = dataPrice;
      state.filterWork = dataPrice;
      state.filterWork5 = priceConditioned;
    },

    //!FILTRO POR TIPO DE TRABAJO
    filterTypeWork: (state, action) => {
      // SE GUARDA EN UN ESTADO PARA USARLO CUANDO FILTRAMOS(COMO CONDICIONAL) POR PRECIO
      state.filterWork4 = state.filterWork3.filter((ele) =>
        ele.ability.includes(action.payload)
      );

      // SA HACE UNA CONDICIONAL PARA SABER QUE DATOS VAMOS A FILTRAR
      let typeWorkConditioned;
      state.filterWork5.length === 0
        ? (typeWorkConditioned = state.filterWork)
        : (typeWorkConditioned = state.filterWork5);

      //RESPUESTA

      if (state.isAll === true) {
        if (action.payload !== "Todas") state.work = state.filterWork4;
        else state.work = state.filterWork3;
      } else {
        action.payload === "Todas"
          ? (state.work = typeWorkConditioned)
          : (state.work = typeWorkConditioned.filter((element) =>
              element.ability.includes(action.payload)
            ));
      }
    },

    getWorkName: (state, action) => {
      state.work = action.payload;
      state.filterWork = action.payload;
      state.filterWork2 = action.payload;
      state.isLoading = false;
    },

    detailWork: (state, action) => {
      const detailData = action.payload[0] || {};
      state.detail = detailData;
      state.isLoading = false;
    },

    resetDetail: (state) => {
      state.detail = {};
    },

    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
      state.error = null;
    },

    resetFilters: (state) => {
      state.work = state.workBackUp;
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
  setCurrentPage,
  getUsers,
  postPagos,
  resetFilters,
} = workSlice.actions;

//export default workSlice.reducer
