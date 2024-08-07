'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Language {
  name: string
  src: string
}

export default function ChangeLanguage() {
  const languages: Language[] = [
    {
      name: 'English',
      src: 'https://img.icons8.com/?size=256w&id=uuRAtTzhLyT5&format=png'
    },
    {
      name: 'Spanish',
      src: 'https://img.icons8.com/?size=256w&id=ZGEFKpJoPdJQ&format=png'
    },
    {
      name: 'French',
      src: 'https://img.icons8.com/?size=256w&id=5RtaKEr09Jy6&format=png'
    },
    {
      name: 'Portuguese',
      src: 'https://img.icons8.com/?size=512w&id=iHI2gDXCsMzH&format=png'
    },
    {
      name: 'Chinese',
      src: 'https://img.icons8.com/?size=512w&id=OafC2pWK4RV4&format=png'
    }
  ]

  const [language, setLanguage] = useState<Language>(languages[0])

  const handleLanguageChange = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage)
  }

  return (
    <div className="dropdown dropdown-hover">
      <button className="m-1 flex items-center gap-2" type="button">
        <Image alt={language.name} height={20} src={language.src} width={20} />
        {language.name}
      </button>
      <ul className="menu dropdown-content z-[1] w-36 rounded-box bg-base-100 p-2 shadow">
        {languages.map((lang) => (
          <li key={lang.name}>
            <button
              className={`flex w-full items-center gap-2 text-left ${
                lang.name === language.name ? 'font-bold' : ''
              }`}
              type="button"
              onClick={() => handleLanguageChange(lang)}
            >
              <Image alt={lang.name} height={20} src={lang.src} width={20} />
              {lang.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
