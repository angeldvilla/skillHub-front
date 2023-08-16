import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const link = {
  gitMagali: "https://github.com/Magali18",
  likedinMagali: "https://www.linkedin.com/in/magali-pereyra-322682239/",
  gitAzael: "https://github.com/raul2216",
  likedinAzael: "https://www.linkedin.com/in/ra%C3%BAl-ortiz-166438225/",
  gitAndres: "https://github.com/HAndresAguino",
  likedinAndres: "https://www.linkedin.com/in/helman-andres-agui%C3%B1o/",
  gitMaia: "https://github.com/maiariaboypujadas",
  likedinMaia: "https://www.linkedin.com/in/maia-riaboy-pujadas-39379520a/",
  gitAngel: "https://github.com/angeldvilla",
  likedinAngel: "",
  gitErik: "https://github.com/angeldvilla",
  likedinErik: "https://www.linkedin.com/in/erik-torres-sacha-a93498200/",
  gitAriel: "https://github.com/NoistNT",
  likedinAriel: "https://linkedin.com/in/ariel-piazzano",
};
const people = [
  {
    name: "Angel David Villa Lujan",

    gitHub: (
      <Link to={link.gitAngel}>
        <AiFillGithub />
      </Link>
    ),
    linkedin: (
      <Link to={link.likedinAngel}>
        <AiFillLinkedin />
      </Link>
    ),
    imageUrl:
      "https://res.cloudinary.com/dvr9giaia/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691899557/PostWorks/dvfxeeskg36epvzkrpaf.jpg",
  },
  {
    name: "Raul Ortiz",
    gitHub: (
      <Link to={link.gitAzael}>
        <AiFillGithub />
      </Link>
    ),
    linkedin: (
      <Link to={link.likedinAzael}>
        <AiFillLinkedin />
      </Link>
    ),
    imageUrl:
      "https://res.cloudinary.com/dvr9giaia/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691900234/FotosDesarrolladores/00ddf44b-b34c-4513-ad92-b316f551ce70_ae5mfd.jpg",
  },
  {
    name: "Magali Pereyra",
    gitHub: (
      <Link to={link.gitMagali}>
        <AiFillGithub />
      </Link>
    ),
    linkedin: (
      <Link to={link.likedinMagali}>
        <AiFillLinkedin />
      </Link>
    ),
    imageUrl:
      "https://res.cloudinary.com/dvr9giaia/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691980631/Screenshot_96_w9pqpw.png",
  },

  {
    name: "Maia Riaboy Pujadas",
    gitHub: (
      <Link to={link.gitMaia}>
        <AiFillGithub />
      </Link>
    ),
    linkedin: (
      <Link to={link.likedinMaia}>
        <AiFillLinkedin />
      </Link>
    ),
    imageUrl:
      "    https://res.cloudinary.com/dvr9giaia/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691899517/PostWorks/yok0x3zbacbek1zrasdh.jpg",
  },
  {
    name: "Helman Andres Aguiño",
    gitHub: (
      <Link to={link.gitAndres}>
        <AiFillGithub />
      </Link>
    ),
    linkedin: (
      <Link to={link.likedinAndres}>
        <AiFillLinkedin />
      </Link>
    ),
    imageUrl:
      "    https://res.cloudinary.com/dvr9giaia/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691899440/PostWorks/vj49eviachgswkunq6a.jpg",
  },

  {
    name: "Erik Torres Sacha",
    gitHub: (
      <Link to={link.gitErik}>
        <AiFillGithub />
      </Link>
    ),
    linkedin: (
      <Link to={link.likedinErik}>
        <AiFillLinkedin />
      </Link>
    ),
    imageUrl:
      "https://res.cloudinary.com/dvr9giaia/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691907459/PostWorks/x6xqyygq3vdahsbjnw3o.jpg",
  },
  {
    name: "Ariel Piazzano",
    gitHub: (
      <Link to={link.gitAriel}>
        <AiFillGithub />
      </Link>
    ),
    linkedin: (
      <Link to={link.likedinAriel}>
        <AiFillLinkedin />
      </Link>
    ),
    imageUrl:
      "https://res.cloudinary.com/dvr9giaia/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691949012/Screenshot_95_kyw12o.png",
  },
];

export default function Contacto() {
  return (
    <div >
      <div className="flex flex-col flex-wrap items-center md:flex-nowrap md:flex-row md:justify-between md:mx-8 lg:mx-12 xl:justify-between xl:mx-32 2xl:mx-48 ">
        <div className="z-[-1]">
          <div data-aos="zoom-out-right" className="z-[-1]">
            <h1>Nuestro Equipo</h1>
            <div
              className="quienesStyle"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <a href={"/"}>
                <img
                  className="logoSkill"
                  src={
                    "https://res.cloudinary.com/dvr9giaia/image/upload/v1691931744/LogostiposPropios/skillHub_d22v7s.jpg"
                  }
                  alt="imagenLogoSkillHub"
                />
              </a>
            </div>
          </div>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div data-aos="zoom-out-right" className="imagenStyle">
                <img src={person.imageUrl} alt={person.name} />
                <div className="nameStyle">
                  <h1>{person.name}</h1>
                  <h1 className="centerLink">
                    {person.gitHub}
                    {person.linkedin}
                  </h1>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
