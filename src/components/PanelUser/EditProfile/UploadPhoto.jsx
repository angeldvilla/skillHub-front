import React, { useState } from "react";
import axios from "axios";

export default function UploadPhoto () {

    const [workdata, setWordata] = useState({
        name: "",
        img: ""
    })
    async function uploadImage(files) {
        console.log(files[0]);
        const imageFormData = new FormData()
        imageFormData.append("file", files[0])
        imageFormData.append("upload_preset", "PostWorks")
        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/dko4cptdy/upload", imageFormData);
            const data = response.data.secure_url;
            console.log("Esta es la respuesta de la data", data);
            // Actualizar el estado de manera inmutable
            setWordata(prevData => ({
                ...prevData,
                img: data
            }));
            console.log("Esta es la nueva info de setWorkData en img", setWordata.img);
        } catch (error) {
            console.log("Error en el componente UploadImage en cludinary", error);
        }
    }


    let previewImage = workdata.img ? (
        <div>
          <span>Previsualización imagen</span>
          <img
            src={workdata.img}
            alt="Previsualización"
            style={{ maxWidth: "20%", height: "20%" }}
          />
        </div>
      ) : null;
    
      return (
        <div>
          <form>
            <input type="file" onChange={(event) => { uploadImage(event.target.files) }}></input>
          </form>
          {previewImage}
        </div>
      );
    };