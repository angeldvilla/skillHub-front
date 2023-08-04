import React from "react";
import "./paginado.css";

export default function Paginated({
  numberOfWorks,
  page,
  workForPage,
  setPage,
  index,
  setIndex,
}) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(numberOfWorks / workForPage); i++) {
    pageNumber.push(i);
  }

  const numBotones = 3;

  const pagePrevius = () => {
    setIndex(index - numBotones);
    if (page % numBotones === 0)
      setPage(numBotones * (Math.trunc(page / numBotones) - 2) + 1);
    else setPage(numBotones * (Math.trunc(page / numBotones) - 1) + 1);
  };

  const pageNext = () => {
    setIndex(index + numBotones);
    const suma = page + numBotones;
    if (suma % numBotones === 0)
      setPage(numBotones * (suma / numBotones - 1) + 1);
    else setPage(numBotones * Math.trunc(suma / numBotones) + 1);
  };

  const specificPage = (page) => {
    setPage(page);
  };
  return (
    <div className="conteiner-paginado">
      <button
        className={`${
          page <= numBotones ? "atras-adelante-desactive" : "atras-adelante"
        }`}
        onClick={pagePrevius}
        disabled={page <= 1}
      >
        {"<<"}
      </button>
      {pageNumber
        .map((noPage) => (
          <button
            key={noPage}
            onClick={() => specificPage(noPage)}
            className={`${noPage === page ? "btn-page-active" : "btn-page"}`}
          >
            {noPage}
          </button>
        ))
        .slice(index, index + numBotones)}
      <button
        className={`${
          pageNumber.length % numBotones === 0 &&
          page >= pageNumber.length - (numBotones - 1)
            ? "atras-adelante-desactive"
            : page >=
              numBotones * Math.trunc(pageNumber.length / numBotones) + 1
            ? "atras-adelante-desactive"
            : "atras-adelante"
        }`}
        onClick={pageNext}
        disabled={page >= pageNumber.length}
      >
        {">>"}
      </button>
    </div>
  );
}
