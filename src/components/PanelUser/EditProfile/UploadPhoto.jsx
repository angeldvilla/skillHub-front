import React, { useState } from "react";
import axios from "axios";
import { Avatar, Button } from "@material-tailwind/react";
import userProfile from "../../../assets/user-profile.svg";

export default function UploadPhoto({ user, avatarInputRef }) {
  const [image, setImage] = useState({
    name: "",
    img: "",
  });
  async function uploadImage(files) {
    console.log(files[0]);
    const imageFormData = new FormData();
    imageFormData.append("file", files[0]);
    imageFormData.append("upload_preset", "PostWorks");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dko4cptdy/upload",
        imageFormData
      );
      const data = response.data.secure_url;
      console.log("Esta es la respuesta de la data", data);
      // Actualizar el estado de manera inmutable
      setImage((prevData) => ({
        ...prevData,
        img: data,
      }));
      console.log(
        "Esta es la nueva info de setWorkData en img",
        image.img
      );
    } catch (error) {
      console.log("Error en el componente UploadImage en cludinary", error);
    }
  }

  const handleAvatarChange = (event) => {
    uploadImage(event.target.files);
  };

  const handleAvatarClick = () => {
    avatarInputRef.current.click();
  };

  const handleCancelImage = () => {
    setImage({
      name: "",
      img: "",
    });
  };

  return (
    <div>
        <button className="avatar-container" onClick={() => handleAvatarClick()}>
          <Avatar
            src={image.img || user?.image || userProfile}
            alt="avatar"
            size="xl"
          />
          <input
            type="file"
            accept="image/jpg,jpeg,png"
            style={{ display: "none" }}
            ref={avatarInputRef}
            onChange={handleAvatarChange}
          />
        </button>
        {image.img && (
          <Button
            color="red"
            size="sm"
            onClick={handleCancelImage}
            className="mt-2"
          >
            Quitar Foto
          </Button>
        )}
    </div>
  );
}
