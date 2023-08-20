import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";

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
         <Button variant="gradient" className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload Files
          </Button>
            {/* <input type="file" onChange={(event) => { uploadImage(event.target.files) }}></input> */}
          </form>
          {previewImage}
        </div>
      );
    };