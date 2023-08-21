import React from "react";
import "aos/dist/aos.css";

const sectionContact = () => {
  return (
    <section id="contact" className="bg-gray-200 py-16">
      <div
        className="flex flex-col justify-center items-center text-white "
        data-aos="fade-down"
      >
        <form
          className="mx-auto container w-1/2 bg-gray-300 p-6 rounded-lg shadow-md border-black"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl font-semibold text-center text-black mb-10"
            data-aos="fade-up"
          >
            Contáctanos
          </h2>
          <div className="mb-6">
            <label className="block text-black font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="w-full p-2 border border-black bg-gray-200 rounded-md text-black"
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
              className="w-full p-2 border border-black bg-gray-200 rounded-md text-black"
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black font-bold mb-2"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              className="w-full p-2 border border-black bg-gray-200 rounded-md text-black"
              id="message"
              name="message"
              rows="4"
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>
          
          <div>
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-sky-700 duration-200 hover:-translate-y-0.5"
          >
            Enviar
          </button>
          </div>

        </form>
      </div>

    </section>
  );
};

export default sectionContact;
