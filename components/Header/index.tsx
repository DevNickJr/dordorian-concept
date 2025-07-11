"use client"
import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import { useState } from "react";
import { siteMetadata } from "@/constants/siteMetaData";
import useThemeSwitch from "@/hooks/useThemeSwitch";
import { cx } from "class-variance-authority";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="container flex items-center justify-between w-full p-4 px-5 sm:px-10">
        <Logo />

        <button className="z-50 inline-block sm:hidden" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 transition-all duration-300 cursor-pointer ease">
            <div className="relative">
              <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200" 
              style={{
              transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
              }}
              
              >&nbsp;</span>
              <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1
              }}
              >&nbsp;</span>
              <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}
              >&nbsp;</span>
            </div>

          </div>
        </button>

        <nav className="fixed z-50 flex items-center px-6 py-3 font-medium capitalize transition-all duration-300 translate-x-1/2 border border-solid rounded-full w-max sm:px-8 border-dark sm:hidden top-6 right-1/2 bg-light/80 backdrop-blur-sm ease"
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        
        >
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>


        <nav className="fixed z-50 items-center hidden px-8 py-3 font-medium capitalize translate-x-1/2 border border-solid rounded-full w-max border-dark sm:flex top-6 right-1/2 bg-light/80 backdrop-blur-sm">
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>
        <div className="items-center hidden sm:flex">
            <a href={siteMetadata.linkedin} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><BsLinkedin className="transition-all duration-200 hover:scale-125 ease" /></a>
            <a href={siteMetadata.twitter} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><BsTwitterX className="transition-all duration-200 hover:scale-125 ease" /></a>
            <a href={siteMetadata.instagram} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><BsInstagram className="transition-all duration-200 hover:scale-125 ease dark:fill-light" /></a>
            <a href={siteMetadata.facebook} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank"><BsFacebook className="transition-all duration-200 hover:scale-125 ease" /></a>
        </div>
    </header>
  )
}

export default Header;