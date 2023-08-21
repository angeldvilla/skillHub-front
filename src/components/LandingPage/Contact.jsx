import "aos/dist/aos.css";
import { Card, Input, Textarea, Typography } from "@material-tailwind/react";

const sectionContact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans -z-[1]">
      <Card
        id="contact"
        data-aos="fade-down"
        shadow={false}
        className="bg-[#f8fafc] p-4 py-10 w-96"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          data-aos="fade-up"
          className="mb-2"
        >
          Contáctanos
        </Typography>
        <form className="my-4" data-aos="fade-up">
          <div className="mb-4 flex flex-col gap-4">
            <Input
              type="text"
              id="name"
              name="name"
              label="Nombre"
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
              size="lg"
              color="black"
              required
              className="text-gray-800"
            />
            <Textarea
              id="message"
              name="message"
              rows={6}
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
          </div>
        </form>
      </Card>
    </div>
  );
};

export default sectionContact;
