import '../styles/BurgerMenu.css';
import { useState } from 'react';
import Link from "next/link";

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

const BurgerMenu = ({menuOpen, menuFunc}) => {

    // const[isOpen, setIsOpen] = useState(false)

    // const setOpenedState = () => {
    //     let reverseOpened = isOpen

    //     setIsOpen(!reverseOpened)
    // }
    return (
        <div>
            <div className = {menuOpen ? 'menu-button-open' : 'menu-button'} onClick={() => menuFunc}>
                <div className='menu-button-burger'></div>
            </div>
        </div>
        
    )
}

export default BurgerMenu