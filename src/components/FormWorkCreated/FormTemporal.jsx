import React, { useState } from 'react'
import axios from 'axios'

function FormTemporal() {
  const [workdata, setWordata] = useState({
    name: '',
    img: ''
  })

  async function uploadImage(files) {
    console.log(files[0])
    const imageFormData = new FormData()

    imageFormData.append('file', files[0])
    imageFormData.append('upload_preset', 'PostWorks')
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dko4cptdy/upload',
        imageFormData
      )
      const data = response.data.secure_url

      console.log('Esta es la respuesta de la data', data)
      // Actualizar el estado de manera inmutable
      setWordata((prevData) => ({
        ...prevData,
        img: data
      }))
      console.log('Esta es la nueva info de setWorkData en img', setWordata.img)
    } catch (error) {
      console.log('Error en el componente UploadImage en cludinary', error)
    }
  }

  let previewImage = workdata.img ? (
    <div>
      <span>Previsualización imagen</span>
      <img
        alt="Previsualización"
        src={workdata.img}
        style={{ maxWidth: '20%', height: '20%' }}
      />
    </div>
  ) : null

  return (
    <div>
      <h1> Form temporal </h1>
      <h3>Pruebas de Cloudinary</h3>
      <form>
        <input
          type="file"
          onChange={(event) => {
            uploadImage(event.target.files)
          }}
        />
      </form>
      {previewImage}
    </div>
  )
}

export default FormTemporal
