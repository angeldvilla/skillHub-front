import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
    const containerStyles = {
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      };
    



    const error404Styles = {
        margin: "0px auto",
        width: "70%",
        textAlign: "center",
        padding: "30px 0px 80px 0px",
        
    };

    const h2Styles = {
        fontSize: "60px",
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
        MozTextShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
        WebkitTextShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
        margin: "0px 0px 40px 0px",
        padding: "15px 0px",
        borderTop: "solid 3px #ccc",
        borderBottom: "solid 3px #ccc",
        color: "#ff9606",
    };

    const page404Styles = {
        float: "left",
        width: "100%",
        position: "relative",
        margin: "0px 0px 30px 0px",
    };

    const pStyles = {
        fontSize: "250px",
        fontWeight: "bold",
        lineHeight: "300px",
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
        MozTextShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
        WebkitTextShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
        color: "blue", // Cambiar el color a azul
    };

    const spanStyles = {
        fontSize: "50px",
        content: "#fff",
        fontWeight: "bold",
        backgroundColor: "black",
        margin: "-40px 0px 0px 0px",
        width: "100%",
        textAlign: "center",
        position: "absolute",
        left: "0px",
        top: "50%",
        textTransform: "uppercase",
        color: "white",
        lineHeight: "60px",
    };

    const paragraphStyles = {
        margin: "0px 0px 30px 0px",
        fontSize: "30px",
        color: "white"
    };

    const goBackStyles = {
        fontSize: "20px",
        textTransform: "uppercase",
        fontWeight: "bold",
        display: "inline-block",
        padding: "15px 30px",
        textDecoration: "none",
        border: "solid 1px",
        color: "#333",
        transition: "all 0.3s ease-in-out",
        color: "#ff9606",
        borderColor: "#ff9606",
    };

    const goBackHoverStyles = {
        color: "#fff !important",
        boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.3)",
        MozBoxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.3)",
        WebkitBoxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#ff9606",
    }


    const imgStyles = {
        display: "block",
        margin: "0 auto", // Centrar horizontalmente
        width: "150%", // Reducir el tamaño a la mitad
    };


    return (
        <div>

        <div style={containerStyles}>
            <div className="kode-content">
                <div className="container">
                    <div style={error404Styles} className="error-404">
                        <h2 style={h2Styles}>UPS</h2>
                        <div style={page404Styles} className="page-404">
                            <p style={pStyles}>404</p>
                            <span style={spanStyles}> No se puede encontrar la página solicitada</span>

                            <img
                                src="https://res.cloudinary.com/dvr9giaia/image/upload/v1691931744/LogostiposPropios/skillHub_d22v7s.jpg"
                                alt=""
                                style={imgStyles} // Aplicar los estilos a la imagen
                            />
                        </div>
                        <h3 style={paragraphStyles}>
                No pudimos encontrar la página que está buscando. Intente iniciar sesión y verifique
                la URL que ingresó.
              </h3>
              <NavLink to="/signin"> {/* Cambia './signin' a '/signin' */}
                <button style={goBackStyles} className="go-back">
                  Inicia sesión
                </button>
              </NavLink>
                    </div>
                </div>
            </div>
            </div>
            </div>
    );
}


export default Error404;
