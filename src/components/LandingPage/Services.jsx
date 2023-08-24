import "aos/dist/aos.css";
import React from "react";
import planPrueba2 from "../../assets/planPrueba2.png";
import planPlatino from "../../assets/planPlatino.png";
import planOro from "../../assets/planOro.webp";

const ServicesSection = () => {
  
  const services = [
    {
      title: "Plan Bronce",
      description:
        "El Plan Bronce te permite experimentar SkillHub con 2 publicaciones.",
      details:
        "Descubre cómo SkillHub puede ayudarte a encontrar las habilidades adecuadas y poner tus talentos en acción. ¡Regístrate ahora!",
      icon: planPrueba2,
    },
    {
      title: "Plan Oro",
      description:
        "El Plan Oro te ofrece 20 publicaciones para destacar tus habilidades y servicios.",
      details:
        "Lleva tus oportunidades al siguiente nivel con un mayor alcance y visibilidad. ¡Aprovecha el plan Oro hoy!",
      icon: planOro,
    },
    {
      title: "Plan Platino",
      description:
        "El Plan Platino te brinda acceso ilimitado para publicar tus habilidades y servicios.",
      details:
        "Conviértete en un miembro de élite y aprovecha al máximo todas las oportunidades que SkillHub tiene para ofrecer. ¡Únete al plan Platino ahora!",
      icon: planPlatino,
    },
  ];

  return (
    <section id="services" className="bg-gray-200 py-16">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-semibold italic text-center mb-20"
          data-aos="fade-up"
        >
          Nuestros Planes de Suscripción
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Service = ({ title, description, details, icon }) => {
  return (
    <div
      className="bg-gray-300 rounded-lg p-6 flex flex-col justify-between"
      data-aos="fade-up"
    >
      <div className="flex justify-center mb-8">
        <img
          src={icon}
          alt={`${title} Icon`}
          className="w-28 h-auto"
          data-aos="fade-down"
        />
      </div>
      <h3 className="text-3xl font-bold mb-8">{title}</h3>
      <p className="text-xl text-gray-600 mb-8">{description}</p>
      <p className="text-lg text-gray-600 mb-10">{details}</p>
    </div>
  );
};

export default ServicesSection;
