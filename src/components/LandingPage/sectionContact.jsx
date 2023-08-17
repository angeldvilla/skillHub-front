import React from 'react'
import "aos/dist/aos.css";

const sectionContact = () => {
  return (
    <div className="flex items-center justify-center" data-aos="fade-down">
    <form className="w-1/2 bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
      <div className="mb-4">
        <label className="block text-black font-bold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          className="w-full p-2 border border-white bg-gray-400 rounded-md text-black"
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-black font-bold mb-2" htmlFor="email">
          Correo Electrónico
        </label>
        <input
          className="w-full p-2 border border-white bg-gray-400 rounded-md text-black"
          type="email"
          id="email"
          name="email"
          placeholder="Correo Electrónico"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-black font-bold mb-2" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="w-full p-2 border border-white bg-gray-400 rounded-md text-b"
          id="message"
          name="message"
          rows="4"
          placeholder="Escribe tu mensaje aquí"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-sky-700 transform transition-transform duration-200 hover:-translate-y-0.5"
      >
        Enviar
      </button>
    </form>
    </div>
  )
}

export default sectionContact
