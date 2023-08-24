import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../AbautUs/Abaut.css";

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
  likedinAngel:
    "https://www.linkedin.com/in/angel-david-villa-luján-b4a669288/",
  gitErik: "https://github.com/ETorresSacha",
  likedinErik: "https://www.linkedin.com/in/erik-torres-sacha-a93498200/",
  gitAriel: "https://github.com/NoistNT",
  likedinAriel: "https://linkedin.com/in/ariel-piazzano",
};
const people = [
  {
    name: "Angel David Villa Lujan",

    gitHub: (
      <Link to={link.gitAngel}>
        <AiFillGithub/>
      </Link>
    ),
    linkedin: (
      <Link to={link.likedinAngel}>
        <AiFillLinkedin/>
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
      "https://res.cloudinary.com/dvr9giaia/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1692754668/74b29f45-0640-4049-a868-d5663e03b7a7_s4ap0s.jpg",
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
    <div>
        <div className="quienesStyle">
          <h1>Nuestro Equipo</h1>
        </div>

        <div className="teamCardContainer">
          {people.map((person) => (
            <div className="teamCard" key={person.name}>
              <img src={person.imageUrl} alt={person.name} />
              <div className="nameSection">
                <h1 className="nameStyle">{person.name}</h1>
              </div>
              <div className="centerLink">
                  <div className="icon-large">
                    {person.gitHub}
                  </div>
                  <div className="icon-large">
                    {person.linkedin}
                  </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
}
