"use client";
import Image from 'next/image';
import moon from '../../../public/assets/moon.png'
import sun from '../../../public/assets/sun-20.png'

import { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={handleTheme} className="btn btn-ghost">
      {theme === "light" ? (
       <>
         <Image src={moon} alt='moon' width={20} height={20}></Image>
        <span>Dark</span>
       </>
      ): (
        <>
          <Image src={sun} alt={sun} width={22} height={22}></Image>
          <span>Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;