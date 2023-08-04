import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  work: [],
  filterWork: [],
  filterWork2: [],
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
    },

    filterName: (state, action) => {
      //! para ordenar por nombre  se tiene que filtrar "state.filterWork" ya que aqui se guradan los datos cuando se renderiza la pagina y cuando se guarda los datos del filtro por precio

      let newData = [];
      if (action.payload === "A-Z")
        newData = state.filterWork.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      else if (action.payload === "Z-A")
        newData = state.filterWork.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      else newData = state.filterWork2;

      state.work = newData;
    },

    filterPrice: (state, action) => {
      console.log(action.payload);

      //! para el filtrado por ´precio se hace a partir de la copia "state.filterWork" y estos valores se guardan en "" para usarlo en el filtro por nombre y en " state.work" para renderizarlo en home
      let dataPrice = [];

      if (action.payload === "menos de 50$")
        dataPrice = state.filterWork2.filter((element) => element.price <= 50);
      else if (action.payload === "50$-100$")
        dataPrice = state.filterWork2.filter(
          (element) => element.price > 50 && element.price <= 100
        );
      else if (action.payload === "100$-200$")
        dataPrice = state.filterWork2.filter(
          (element) => element.price > 100 && element.price <= 200
        );
      else if (action.payload === "200$-mas")
        dataPrice = state.filterWork2.filter((element) => element.price > 200);
      else dataPrice = state.filterWork2;

      state.work = dataPrice;
      state.filterWork = dataPrice;
    },

    filterTypeWork: (state, action) => {
      if (action.payload === "all") state.work = state.filterWork2;
      else {
        const dataWork = state.filterWork.filter(
          (element) => element.category === action.payload
        );
        state.work = dataWork;
      }
    },
  },
});

export const {
  startIsLoading,
  allWork,
  filterName,
  filterPrice,
  filterTypeWork,
} = workSlice.actions;

//export default workSlice.reducer





// import React from 'react'
// import './paginado.css'



// function Paginado({numberOfRecets,page,recipeForPage,setPage, index, setIndex}) {

//     const pageNumber=[]
//     for(let i=1;i<=Math.ceil(numberOfRecets/recipeForPage);i++){
//         pageNumber.push(i)
//     }

//     const numBotones = 5 // este es el numero de botones que queremos renderizar
//     //todo--> FUNCIONA PARA UN NUMERO DE BOTONES IMPAR, SI SE QUIERE PONER PARA UN NUMERO PAR SE TIENE QUE MODIFICAR LA LOGICA EN EL CSS DEL BOTON "NEXT" (numBotones-1)

//     const pagePrevius =()=>{

//         setIndex(index-numBotones)
//         if(page%numBotones===0) setPage(numBotones*(Math.trunc(page/numBotones)-2)+1)
//         else setPage(numBotones*(Math.trunc(page/numBotones)-1)+1)
//     }

//     const pageNext=()=>{
//         setIndex(index+numBotones)
//         const suma=page+numBotones
//         if(suma%numBotones===0) setPage(numBotones*((suma/numBotones)-1)+1)
//         else setPage(numBotones*(Math.trunc(suma/numBotones))+1) 
//     }

//     const specificPage=(page)=>{
//         setPage(page)
//     }


//   return (
//     <div className='conteiner-paginado'>
//             <button className={`${page<=numBotones?'atras-adelante-desactive':'atras-adelante'}`} onClick={pagePrevius} disabled={page<=1}>{"<<"}</button>
//             {pageNumber.map(noPage=>(
//                 <button key={noPage}  onClick={()=>specificPage(noPage)} className={`${noPage===page ? 'btn-page-active':'btn-page'}`}>{noPage}</button>
//             )).slice(index,index+numBotones)}
//             <button   className={`${pageNumber.length%numBotones===0 && page>=pageNumber.length-(numBotones-1) ? 'atras-adelante-desactive':(page>=(numBotones*Math.trunc(pageNumber.length/numBotones)+1)?'atras-adelante-desactive':'atras-adelante')}`} onClick={pageNext} disabled={page>=pageNumber.length}>{">>"}</button>
//     </div>
//   )
// }

// export default Paginado


