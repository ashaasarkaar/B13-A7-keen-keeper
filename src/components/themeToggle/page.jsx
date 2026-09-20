"use client";

import Image from "next/image";
import { useState } from "react";

import moon from "../../../public/assets/moon.png";
import sun from "../../../public/assets/sun-20.png";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={handleTheme} className="btn btn-ghost gap-2">
      {theme === "light" ? (
        <>
          <Image
            src={moon}
            alt="Dark mode"
            width={20}
            height={20}
          />
          <span>Dark</span>
        </>
      ) : (
        <>
          <Image
            src={sun}
            alt="Light mode"
            width={22}
            height={22}
          />
          <span>Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;