import React from 'react';
import Image from "next/image";
import Logo from "../../public/images/hiwotStudio.png";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';
import { motion } from "framer-motion";
import BurgerMenu from './BurgerMenu';
import global from '../styles/globals.css';

const NavLinksMobile = () => {
  return (
    <div>
      <ul className="flex flex-col text-offWhite1 uppercase ">
        <Link href="/services">
          <li className="p-4 border-b border-offWhite1 hover:border-b text-xl hover:text-lightBrown cursor-pointer">Services</li>
        </Link>

        <Link href="/about">
          <li className="p-4 border-b border-offWhite1 hover:border-b text-xl hover:text-lightBrown">About</li>
        </Link>

        <Link href="/gallery">
          <li className="p-4 border-b border-offWhite1 hover:border-b text-xl hover:text-lightBrown">Gallery</li>
        </Link>

        <Link href="/contact">
          <li className="p-4 border-b border-offWhite1 hover:border-b text-xl hover:text-lightBrown">Contact</li>
        </Link>

        <a href="https://symmetrysalonstudios.com/stylist/hiwot-aberra/" target="_blank" rel="noopener noreferrer">
          <li className="p-4 pb-5 hover:border-b text-xl hover:text-lightBrown">Book Now</li>
        </a>

        </ul>
    </div>

  );
};

const NavLinks = () => {
  return (
    <nav className="">
      <div className="">
        <ul className="flex justify-center items-center flex-wrap uppercase">
          <Link href="/services">
            <li className="ml-10 hover:border-b text-xl hover:text-lightBrown cursor-pointer">Services</li>
          </Link>
          <Link href="/about">
            <li className="ml-10 hover:border-b text-xl hover:text-lightBrown">About</li>
          </Link>
          <Link href="/gallery">
            <li className="ml-10 hover:border-b text-xl hover:text-lightBrown">Gallery</li>
          </Link>
          <Link href="/contact">
            <li className="ml-10 hover:border-b text-xl hover:text-lightBrown">Contact</li>
          </Link>
          <a href="https://symmetrysalonstudios.com/stylist/hiwot-aberra/" target="_blank" rel="noopener noreferrer">
            <li className="mx-10 hover:border-b text-xl hover:text-lightBrown">Book Now</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
 
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='h-full top-0 w-full bg-specialBlack z-10 sticky'>

      <div className='flex justify-between flex-wrap'>
        <Link href="/">
            <motion.div className="pl-5 py-3" whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
              <Image
                  src={Logo}
                  alt="Logo"
                  width="115"
                  height="10"
                  className="cursor-pointer"
                  priority
              />
            </motion.div>
        </Link>

        {/* Laptop version */}
        <div className="">
            <div className="flex justify-between items-center h-full w-full 2xl:px-16 maxmd:hidden text-white font-serif nav">
              <NavLinks />
            </div>
        </div>

        {/* Mobile version */}
        <div className="hidden maxmd:flex maxmd:flex-col">
          <div onClick={handleMenu} className="flex flex-row justify-between">
            <div className='pt-3 pr-12'>
              <BurgerMenu menuOpen={menuOpen} handleMenu={handleMenu} />
            </div>
          </div>
          {/* <div onClick={handleMenu} className="flex flex-row justify-between">
            
            <div className='pt-7 pr-8'>
              { !menuOpen ? <AiOutlineMenu className="text-white " size={45} /> : <AiOutlineClose className="text-lightBrown" size={45} /> }
            </div>
          </div> */}
          {/* <BurgerMenu /> */}
        </div>
        {menuOpen && (
            <div className=" w-full text-center">
              <NavLinksMobile />
            </div>
        )}
      </div>
      

    </nav>
  )
}

export default Navbar
