import "aos/dist/aos.css";
import { Input, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const SectionContact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_lfymgxc",
      "template_fi0kha4",
      {
        to_email: "correoskillhub@gmail.com",
        user_first_name: form.name,
      },
      "RY2Fv-D-bvjhDwd_H"
    );
    handleReset();
    toast.success("Mensaje enviado correctamente");
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen font-sans">
      <div
        id="contact"
        data-aos="fade-down"
        className="bg-[#f8fafc] p-4 pt-10 w-96 rounded-lg"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          data-aos="fade-up"
          className="mb-2"
        >
          Contáctanos
        </Typography>
        <form onSubmit={handleSubmit} className="my-4" data-aos="fade-up">
          <div className="mb-4 flex flex-col gap-4">
            <Input
              type="text"
              id="name"
              name="name"
              label="Nombre"
              value={form.name}
              onChange={handleChange}
              size="lg"
              color="black"
              required
              className="text-gray-800"
            />
            <Input
              type="email"
              id="email"
              name="email"
              label="Correo Electrónico"
              value={form.email}
              onChange={handleChange}
              size="lg"
              color="black"
              required
              className="text-gray-800"
            />
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              
              variant="static"
              placeholder="Escribe tu mensaje aquí"
              required
              className="text-gray-800 p-2"
            ></Textarea>
          </div>

          <div>
            <button className="w-full mt-4 bg-[#242121] rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-blue-gray-500 transition-all font-semibold">
              ENVIAR
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full mt-2 bg-blue-gray-400 rounded-md py-3 text-white text-xs hover:shadow-md hover:shadow-gray-500 transition-all font-semibold"
            >
              REINICIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionContact;
