import 'aos/dist/aos.css'
import { Input, Textarea, Typography } from '@material-tailwind/react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

function SectionContact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_lfymgxc',
      'template_fi0kha4',
      {
        to_email: 'correoskillhub@gmail.com',
        user_first_name: form.name
      },
      'RY2Fv-D-bvjhDwd_H'
    )
    handleReset()
    toast.success('Mensaje enviado correctamente')
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen font-sans">
      <div
        className="bg-[#f8fafc] p-4 pt-10 w-96 rounded-lg"
        data-aos="fade-down"
        id="contact"
      >
        <Typography
          className="mb-2"
          color="blue-gray"
          data-aos="fade-up"
          variant="h4"
        >
          Contáctanos
        </Typography>
        <form className="my-4" data-aos="fade-up" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-4">
            <Input
              required
              className="text-gray-800"
              color="black"
              id="name"
              label="Nombre"
              name="name"
              size="lg"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              required
              className="text-gray-800"
              color="black"
              id="email"
              label="Correo Electrónico"
              name="email"
              size="lg"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <Textarea
              required
              className="text-gray-800 p-2"
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí"
              rows={6}
              value={form.message}
              variant="static"
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="w-full mt-4 bg-[#242121] rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-blue-gray-500 transition-all font-semibold">
              ENVIAR
            </button>
            <button
              className="w-full mt-2 bg-blue-gray-400 rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-gray-500 transition-all font-semibold"
              type="button"
              onClick={handleReset}
            >
              REINICIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SectionContact
