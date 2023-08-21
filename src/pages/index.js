import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import IconCarousel from '../components/iconCarousel';
import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';


// extend the theme

/* represents the home page */
export default function Home() {
    const slides = [
        { url: "/images/curlyModel1.jpg", title: 'curly1' },
        { url: "/images/wavyModel.jpg", title: 'wavy1' },
        { url: "/images/asianModel.jpg", title: 'straight' },
    ];

    const containerStyles = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    const containerStyle2 = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(/images/homeModel.jpg)`
    };

    const textStyles = {
        position: 'relative', // Added positioning
        top: '-50%',
        left: '50%',
        transform: 'translate(calc(-50% - 45px), -50%)',
        textAlign: 'center',
        color: '#f5deb3',
        zIndex: 1, // Added z-index
        textShadow: '2px 2px rgb(0, 0, 0, 0.75)'
      };

      const textStylesMobile = {
        position: 'absolute', // Added positioning
        top: '53%',
        left: '62%',
        transform: 'translate(calc(-50% - 45px), -50%)',
        textAlign: 'center',
        color: '#f5deb3',
        zIndex: 2, // Added z-index
        textShadow: '2px 2px rgb(0, 0, 0, 0.75)'
      };

    const pStyles = {
      fontSize: '22px', // Added fontSize
      zIndex: -1
      // Additional h1 styles if desired
    };

    return (
        <div className="" >
            <ChakraProvider>
                <Navbar />

                {/* This is the screen for widths >= 820px */}
                
                <div className="bg-specialBlack maxsp7:hidden" style={containerStyles}>
                    
                    {/* Make the parentWidth dynamic for different screen widths */}
                    <ImageSlider className="" slides={slides} parentWidth={500} /> 
                    <div className="headerContainer flex-col md:hidden" style={textStyles}>
                        <h1 className="text-[90px] font-[150] sm:text-6xl pb-28 pt-24">Hiwot Studio</h1>
                        <p className="hidden lg2:block lg2:pb-80 lg2:text-[40px] " style={pStyles}>The Hairstylist You Can Trust</p>
                        <div className="maxlg2:pt-10 lg2:pt-9">
                            <a href="https://symmetrysalonstudios.com/stylist/hiwot-aberra/" target="_blank" rel="noopener noreferrer">
                                <button className="bookBtn " role="button">BOOK NOW</button>
                            </a>    
                        </div> 
                        {/* Div for Salon Hours */}
                        <div className=''>
                            <div className='inline-flex items-center space-x-2 pt-11'>
                                    <FaClock className="text-lightBrown text-xl" />
                                    <h3 className='hourHeader'>Hours</h3>
                            </div>
                            
                            <div className="text-center">
                                <h3>Tuesday: 9AM-5PM</h3>
                                <h3>Thursday & Friday: 9AM-8PM</h3>
                                <h3>Saturday: 8AM-8:30PM</h3>
                                <h3>Sunday: 9AM-8:30PM</h3>
                            </div>
                        </div>
                    </div>   
                </div>

                {/* This is the screen for widths < 820px */}
                <div className="bg-offWhite1 sp7:hidden" style={containerStyle2}>
                    <div className="headerContainer1 sp7:hidden" style={textStylesMobile}>
                        {/* first h1 tag is for mobile devices */}

                        <h1 className="text-[90px] font-[150] sm:text-6xl pt-32">Hiwot Studio</h1>
                        <div className="maxlg2:pt-10 lg2:pt-9">
                            <a href="https://symmetrysalonstudios.com/stylist/hiwot-aberra/" target="_blank" rel="noopener noreferrer">
                                <button className="bookBtn " role="button">BOOK NOW</button>
                            </a>
                        </div>

                        {/* Div for Salon Hours */}
                        <div className=''>
                            <div className='inline-flex items-center space-x-2 pt-11'>
                                    <FaClock className="text-lightBrown text-xl" />
                                    <h3 className='hourHeader'>Hours</h3>
                            </div>
                            
                            <div className='text-left'>
                                <h3>Tues: 9AM-5PM</h3>
                                <h3>Thurs: 9AM-8PM</h3>
                                <h3>Fri: 9AM-8PM</h3>
                                <h3>Sat: 8AM-8:30PM</h3>
                                <h3>Sun: 9AM-8:30PM</h3>
                            </div>
                            
                        </div>

                    </div>
                </div>

                {/* User Reviews */}
                <div className="md:hidden bg-specialBlack">
                    <IconCarousel />
                </div>
                
                <Footer />
            </ChakraProvider>
        </div>
    )
}
