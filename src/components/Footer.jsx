import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

import {BsFacebook, BsInstagram, BsYelp, BsLinkedin} from 'react-icons/bs';

const SocialIcon = ({ Icon }) => {
    return (
      <motion.div className="text-white text-7xl sm:text-5xl hover:text-lightBrown" whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
        <Icon />
      </motion.div>
    );
  };

const Footer = () => {
  return (
    <footer className="bg-specialBlack">

        <div className="container mx-auto flex justify-center py-12">
            <div className="py-5">
                <div className="flex gap-6 justify-center pb-5 ">
                  
                    <a href="https://www.instagram.com/hiwotstudio/" target="_blank" rel="noopener noreferrer">
                        <SocialIcon Icon={BsInstagram} />
                    </a>

                
                    <a href="https://www.facebook.com/hiwotstudio/" target="_blank" rel="noopener noreferrer">
                        <SocialIcon Icon={BsFacebook} />
                    </a>
                    
                    
                    <a href="https://www.yelp.com/biz/hiwotstudio-bethesda" target="_blank" rel="noopener noreferrer">
                        <SocialIcon Icon={BsYelp} />
                    </a>
                   
                    
                    <a href="https://www.linkedin.com/in/hiwot-aberra-11008a94" target="_blank" rel="noopener noreferrer">
                        <SocialIcon Icon={BsLinkedin} />
                    </a>
                    
                </div>

                <div className=" text-white flex gap-6 justify-center font-semibold">
                        {/* "{new Date().getFullYear()}" updates the year every year. */}
                        <p> &copy; {new Date().getFullYear()} Hiwot Studio | All Rights Reserved </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer