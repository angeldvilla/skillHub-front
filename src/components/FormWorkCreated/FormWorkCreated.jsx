import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Textarea,
  Typography
} from '@material-tailwind/react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { toast } from 'sonner'

import validation from '../Validations/Validations'
import {
  postJobs,
  getTypes,
  editPost
} from '../../toolkit/ActionsworkPublications'
import { getDetailWork } from '../../toolkit/thunks'
import { useLocalStorage } from '../UseLocalStorage/UseLocalStorage'
import { getUser } from '../../toolkit/Users/usersHandler'
import Footer from '../Footer/Footer'
import Nav from '../PanelUser/Nav'

const WorkPerTime = ['/Hora', '/Fijo']
const maxSiseMB = 3 * 1024 * 1024 // Tamaño de 3mb para las fotos

export default function FormCreateWork() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ability = useSelector((state) => state.formwork.allWorkTypes)
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('')
  const [fileSelected, setFileSelected] = useState(false) //Soluciona el filed seleccionado
  const [selectKey, setSelectKey] = useState(0)
  const [selectKey1, setSelectKey1] = useState(1)
  const fileInputRef = useRef(null)
  const TodosLostrabajos = useSelector((state) => state.work.work)
  const { userCredentials } = useSelector((state) => state.users)
  const trabajoFiltrado = TodosLostrabajos.find((trabajo) => trabajo._id === id) // Usa find en lugar de filter para obtener un solo objeto
  let numericPrice

  const [workdata, setWorkData] = useState({
    title: '',
    description: '',
    address: '',
    ability: [],
    image: '',
    price: ''
  })

  const [errors, setErrors] = useState({
    title: '',
    description: '',
    address: '',
    ability: [],
    image: '',
    price: ''
  })

  useEffect(() => {
    dispatch(getTypes())
    if (userCredentials && userCredentials.uid === id) {
      dispatch(getDetailWork(id))
      dispatch(getUser(id))
    }
  }, [dispatch, id, userCredentials])

  function handleChange(event) {
    const { name, value } = event.target

    setWorkData({
      ...workdata,
      [name]: value
    })

    setErrors(
      validation({
        ...workdata,
        [name]: value
      })
    )
  }

  const handleClick = () => {
    navigate('/home')
  }

  function handleSelect(value) {
    const typeworkSelect = value

    if (!workdata.ability.includes(typeworkSelect)) {
      setWorkData({
        ...workdata,
        ability: [...workdata.ability, typeworkSelect]
      })
    }
  }

  const handleSelectPrice = (value) => {
    setSelectedPaymentOption(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const putUser = async () => {
      const resultPut = await axios.put(
        `https://skillhub-back-glsd.onrender.com/user/${id}`,
        {
          cantidadPost: filterCantidadPost[0] + 1
        }
      )
    }

    putUser()
    let updatedWorkData

    const validateFields = () => {
      if (
        !workdata.title ||
        !workdata.description ||
        !workdata.price ||
        !workdata.image ||
        !workdata.address
      ) {
        toast.error('Completa los datos para continuar')

        return false
      } else if (!selectedPaymentOption) {
        toast.error('Selecciona una opción de pago (Hora o Precio fijo)')

        return false
      } else if (workdata.ability.length === 0) {
        toast.error('Selecciona al menos una categoría')

        return false
      } else if (workdata.ability.length > 3) {
        toast.error('No pueden haber más de 3 categorías seleccionadas')

        return false
      } else if (workdata.title.length > 40) {
        toast.error('El título debe tener máximo 40 caracteres')

        return false
      } else if (workdata.description.length > 200) {
        toast.error('La descripción debe tener máximo 200 caracteres')

        return false
      } else if (
        errors.image === 'El tamaño de la imagen debe ser inferior a 3MB'
      ) {
        toast.error('El peso de la imagen debe ser de máximo 3MB')

        return false
      } else if (
        errors.title === 'Prohibido' ||
        errors.description === 'Prohibido'
      ) {
        toast.error('No está permitido escribir este tipo de servicios')

        return false
      }

      return true
    }

    if (trabajoFiltrado) {
      numericPrice = parseInt(workdata.price, 10) // Parsear a número
      if (validateFields()) {
        const userConfirmation = window.confirm('¿Editar trabajo?')

        if (userConfirmation) {
          // Concatenar la opción de pago al precio
          const finalPrice = `${numericPrice} ${selectedPaymentOption}`

          updatedWorkData = {
            ...workdata,
            price: finalPrice
          }

          dispatch(editPost(updatedWorkData, id))
          handleReset()
          toast.success('Trabajo Editado correctamente')

          setTimeout(() => {
            navigate(`/user-panel/${id}/home`)
          }, 3000)
        }
      }
    } else {
      if (validateFields()) {
        const userConfirmation = window.confirm(
          'ADVERTENCIA! No podrás modificar el título después.'
        )

        if (userConfirmation) {
          // Concatenar la opción de pago al precio
          const finalPrice = `${workdata.price} ${selectedPaymentOption}`

          updatedWorkData = {
            ...workdata,
            price: finalPrice
          }

          dispatch(postJobs(updatedWorkData, id))
          handleReset()
          toast.success('Trabajo creado correctamente')

          setTimeout(() => {
            navigate(`/user-panel/${id}/WorkPublications`)
          }, 3000)
        }
      }
    }
  }

  //LocalStorage values
  const [textDesciption, setTextDesciption] = useLocalStorage('text', '')
  const [textTitle, setTextTitle] = useLocalStorage('tex1', ' ')
  const [priceValue, setPriceValue] = useLocalStorage('text2', '')
  const [directionValue, setDirectionValue] = useLocalStorage('tex3', ' ')

  const handleReset = () => {
    setTextTitle('')
    setTextDesciption('')
    setDirectionValue('')
    setPriceValue('')
    setFileSelected(false)
    setSelectKey((prevKey) => prevKey + 1)
    setSelectKey1((prevKey) => prevKey + 10)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }

    setWorkData({
      title: '',
      description: '',
      ability: [],
      image: '',
      address: '',
      price: ''
    })
  }

  useEffect(() => {
    if (textTitle || textDesciption || priceValue || directionValue) {
      setWorkData((prevData) => ({
        ...prevData,
        title: textTitle,
        description: textDesciption,
        price: priceValue,
        address: directionValue
      }))
    }
  }, [])

  //Para poder seleccionar y borrar las categorias seleccionadas
  const tiposSelected = workdata.ability.map((cat) => (
    <div key={cat}>
      <span>{cat}</span>
      <button
        className="p-0.5 ml-1 bg-gray-800 text-white rounded-md w-6 h-6 border-2 border-slate-600 hover:bg-gray-700 hover:shadow-sm transition text-xs flex items-center justify-center"
        type="button"
        onClick={() => handleDelete(cat)}
      >
        {' '}
        x{' '}
      </button>
    </div>
  ))

  function handleDelete(cat) {
    setWorkData({
      ...workdata,
      ability: workdata.ability.filter((typ) => typ !== cat)
    })
  }

  //Subir imagenes a cloudinary

  async function uploadImage(files) {
    const selectedFile = files[0]

    if (selectedFile) {
      if (selectedFile.size < maxSiseMB) {
        setErrors({
          ...errors,
          image: ''
        })
        const imageFormData = new FormData()

        imageFormData.append('file', files[0])
        imageFormData.append('upload_preset', 'PostWorks')
        try {
          const response = await axios.post(
            'https://api.cloudinary.com/v1_1/dvr9giaia/upload',
            imageFormData
          )
          const data = response.data.secure_url

          // Actualizar el estado de manera inmutable
          setWorkData((prevData) => ({
            ...prevData,
            image: data
          }))
        } catch (error) {
          console.log('Error en el componente UploadImage en cludinary', error)
        }
        setFileSelected(true)
      } else {
        setErrors({
          ...errors,
          image: 'El tamaño de la imagen debe ser inferior a 3MB'
        })
      }
    }
  }

  // Previsualización de la imagen
  let previewImage = workdata.image ? (
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <span>Imagen Seleccionada</span>
      <br />
      <img
        alt="nature"
        className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src={workdata.image}
        style={{ maxWidth: '200px', height: '200px', margin: 'auto' }}
      />
    </span>
  ) : null

  //Editar tarea

  useEffect(() => {
    if (trabajoFiltrado) {
      setWorkData({
        title: trabajoFiltrado.title,
        description: trabajoFiltrado.description,
        address: trabajoFiltrado.address,
        ability: trabajoFiltrado.ability,
        image: trabajoFiltrado.image,
        price: trabajoFiltrado.price
      })
    }
  }, [trabajoFiltrado, id])

  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const response = await axios(
        `https://skillhub-back-glsd.onrender.com/user/`
      )

      setUsuario(response.data.filter((element) => element.uid === id))
    }

    getUser()
  }, [id])

  const filterUser = () => {
    if (
      usuario
        .filter((element) => element.uid === id)
        .map(({ pay }) => pay)[0] === undefined
    ) {
      return 'No hay suscripción'
    } else if (
      !usuario
        .filter((element) => element.uid === id)
        .map(({ pay }) => pay.subscription)
    ) {
      return 'No hay suscripción'
    } else if (
      usuario
        .filter((element) => element.uid === id)
        .some(({ pay }) => pay.subscription === true)
    ) {
      return usuario
        .filter((element) => element.uid === id)
        .map(({ pay }) => pay.plan)[0]
    } else {
      return 'No hay suscripción'
    }
  }

  const filterCantidadPost = usuario
    .filter((element) => element.uid === id)
    .map(({ cantidadPost }) => cantidadPost)
  const filterCantidadPost2 = usuario
    .filter((element) => element.uid === id)
    .map(({ cantidadPost }) => cantidadPost)[0]

  const findValidacion = () => {
    if (filterUser() === 'No hay suscripción') {
      return 'No se encontro suscripcion activa'
    } else if (filterUser() === 'Plan BRONCE' && filterCantidadPost2 === 2) {
      return 'cumplio la cantidad'
    } else if (filterUser() === 'Plan ORO' && filterCantidadPost2 === 15) {
      return 'cumplio la cantidad'
    } else {
      return 'Suscripción activa'
    }
  }
  const resultValidacion = findValidacion()

  return (
    <div>
      {userCredentials &&
      (usuario.length === 1
        ? resultValidacion === 'Suscripción activa'
        : userCredentials) ? (
        <div className="flex flex-col items-center justify-center">
          <Nav />

          <div className="my-7">
            <Card className="bg-[#f8fafc] px-4 py-2 w-96" shadow={false}>
              <div className="">
                <Button className="flex w-full mb-4" onClick={handleClick}>
                  <ArrowLeftIcon className="h-4 w-4" strokeWidth={2} />
                </Button>
              </div>
              <form
                className="mt-4 mb-4"
                onSubmit={(event) => handleSubmit(event)}
              >
                {trabajoFiltrado ? (
                  <Typography
                    className="text-3xl text-center text-white mb-7 mt-6"
                    variant="h4"
                  >
                    Editar
                  </Typography>
                ) : (
                  <Typography className="mb-2" variant="h4">
                    ¡Postula tu trabajo!
                  </Typography>
                )}

                <div className="mb-4 flex flex-col gap-4">
                  {/* Title */}
                  <Input
                    color="gray"
                    label="Qué trabajo necesitas?"
                    name="title"
                    readOnly={trabajoFiltrado}
                    size="lg"
                    type="text"
                    value={trabajoFiltrado ? workdata.title : textTitle}
                    onChange={(event) => {
                      const newValue = event.target.value

                      handleChange(event)
                      setTextTitle(newValue)
                    }}
                  />
                  {errors.title ? (
                    <span className="text-center text-sm text-red-500">
                      {errors.title}
                    </span>
                  ) : null}

                  <Textarea
                    className="p-3 text-[12px] leading-loose font-sans font-normal placeholder:text-blue-gray-500 rounded-md"
                    color="gray"
                    id="description"
                    name="description"
                    placeholder="Necesito persona con capacidad de..."
                    rows={6}
                    value={
                      trabajoFiltrado ? workdata.description : textDesciption
                    }
                    variant="static"
                    onChange={(event) => {
                      const newValue = event.target.value

                      handleChange(event)
                      setTextDesciption(newValue)
                    }}
                  />
                  {errors.description ? (
                    <span className="text-center text-sm text-red-500">
                      {errors.description}
                    </span>
                  ) : null}

                  <Input
                    color="gray"
                    label="Precio"
                    name="price"
                    size="lg"
                    type="text"
                    value={
                      trabajoFiltrado
                        ? workdata.price.split(' ')[0]
                        : priceValue
                    }
                    onChange={(event) => {
                      const newValue = event.target.value

                      handleChange(event)
                      setPriceValue(newValue)
                    }}
                  />

                  <Select
                    key={selectKey}
                    label="Tipo de pago"
                    size="lg"
                    onChange={(value) => handleSelectPrice(value)}
                  >
                    {WorkPerTime.map((work, index) => (
                      <Option
                        key={index}
                        className="text-gray-800 hover:bg-gray-300 transition duration-150"
                        value={work}
                      >
                        {work}
                      </Option>
                    ))}
                  </Select>

                  <Select
                    key={selectKey1}
                    label="Categorias"
                    size="lg"
                    onChange={(value) => handleSelect(value)}
                  >
                    {ability.map((typ, index) => (
                      <Option
                        key={index}
                        className="text-gray-800 hover:bg-gray-300 transition duration-150"
                        disabled={
                          workdata.category
                            ? workdata.ability.includes(ability.category)
                            : null
                        }
                        value={typ.category}
                      >
                        {typ.category}
                      </Option>
                    ))}
                  </Select>
                  {tiposSelected.length > 0 && (
                    <div className="px-1">
                      <Typography className="mb-2" variant="h6">
                        Categorias seleccionadas:
                      </Typography>
                      <div className="flex flex-col gap-2">
                        <Typography
                          className="flex flex-wrap justify-around gap-2 px-4"
                          variant="small"
                        >
                          {tiposSelected}
                        </Typography>
                        {workdata.ability.length > 3 && (
                          <span className="text-center text-sm text-red-500">
                            ¡No puedes seleccionar más de 3 categorías!
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  <Input
                    color="gray"
                    label="Dirección"
                    name="address"
                    size="lg"
                    type="text"
                    value={trabajoFiltrado ? workdata.address : directionValue}
                    onChange={(event) => {
                      const newValue = event.target.value

                      handleChange(event)
                      setDirectionValue(newValue)
                    }}
                  />

                  <Typography className="px-1" variant="h6">
                    Imagen:
                  </Typography>
                  <input
                    ref={fileInputRef}
                    className="bg-neutral-800 text-black rounded-sm hover:bg-sky-700"
                    name="image"
                    type="file"
                    onChange={(event) => {
                      handleChange(event)
                      uploadImage(event.target.files)
                    }}
                  />
                  {previewImage}
                  {errors.image ? (
                    <span className="text-center text-sm text-red-500">
                      {errors.image}
                    </span>
                  ) : null}
                </div>
                {trabajoFiltrado ? (
                  <button
                    className="w-full mt-4 bg-[#242121] rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-blue-gray-500 transition-all font-semibold"
                    type="button"
                  >
                    Editar Trabajo
                  </button>
                ) : (
                  <button
                    className="w-full mt-4 bg-[#242121] rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-blue-gray-500 transition-all font-semibold"
                    type="button"
                  >
                    Publicar Trabajo
                  </button>
                )}
                <button
                  className="w-full mt-2 bg-gray-500 rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-blue-gray-500 transition-all font-semibold"
                  type="button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </form>
            </Card>
          </div>
        </div>
      ) : (
        <div
          className="flex justify-center items-center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '70vh',
            backgroundColor: 'white',
            color: 'black'
          }}
        >
          <p
            className="title"
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px',
              width: '50%',
              textAlign: 'center'
            }}
          >
            No existe suscripcion activa y/o cumplió con el limite permitido de
            publicaciones. Por favor, accede a un plan para disfrutar de
            nuestros beneficios.
          </p>
          <p
            className="title"
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px',
              width: '50%',
              textAlign: 'center'
            }}
          >
            ¡Esperamos contar con usted!
          </p>

          <div className="flex justify-between w-1/2">
            <NavLink to={`/user-panel/${usuario[0].uid}/home`}>
              <button
                className="p-2 mt-8 bg-blue-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-sky-700 hover:shadow-md transition"
                type="button"
              >
                Ir al inicio
              </button>
            </NavLink>
            <NavLink to={`/user-panel/${usuario[0].uid}/memberShip`}>
              <button
                className="p-2 mt-8 bg-blue-800 text-white rounded-md w-48 border-2 border-slate-600 hover:bg-sky-700 hover:shadow-md transition"
                type="button"
              >
                Suscripción
              </button>
            </NavLink>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
