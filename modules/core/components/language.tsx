import Image from 'next/image'

export default function ChangeLanguage() {
  return (
    <div className="dropdown dropdown-hover">
      <div className="m-1 flex gap-2" role="button" tabIndex={0}>
        <Image
          alt="English"
          height={20}
          src="https://img.icons8.com/?size=256w&id=uuRAtTzhLyT5&format=png"
          width={20}
        />
        English
      </div>
      <ul className="menu dropdown-content z-[1] w-36 rounded-box bg-base-100 p-2 shadow">
        <li>
          <p>
            <Image
              alt="English"
              height={20}
              src="https://img.icons8.com/?size=256w&id=uuRAtTzhLyT5&format=png"
              width={20}
            />
            English
          </p>
        </li>
        <li>
          <p>
            <Image
              alt="Spanish"
              height={20}
              src="https://img.icons8.com/?size=256w&id=ZGEFKpJoPdJQ&format=png"
              width={20}
            />
            Spanish
          </p>
        </li>
        <li>
          <p>
            <Image
              alt="French"
              height={20}
              src="https://img.icons8.com/?size=256w&id=5RtaKEr09Jy6&format=png"
              width={20}
            />
            French
          </p>
        </li>
        <li>
          <p>
            <Image
              alt="Portuguse"
              height={50}
              src="https://img.icons8.com/?size=512w&id=iHI2gDXCsMzH&format=png"
              width={150}
            />
            Portuguese
          </p>
        </li>
        <li>
          <p>
            <Image
              alt="Chinese"
              height={20}
              src="https://img.icons8.com/?size=512w&id=OafC2pWK4RV4&format=png"
              width={20}
            />
            Chinese
          </p>
        </li>
      </ul>
    </div>
  )
}
