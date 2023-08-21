// import React from 'react';
import { Box, Text, Image, useColorModeValue } from "@chakra-ui/react";
import skillsCSS from '../styles/imageCarousel.css';
import React, { useState, useEffect } from 'react';
// import Image from 'next/image'
import Link from 'next/link'

// const imageArray = [
//     { src: '/images/redHair1.jpg', alt: 'Red Hair 1', text: '', source: '/images/redHair1.jpg' },
//     { src: '/images/familia.jpg', alt: 'Curly family', text: '', source: '/images/familia.jpg' },
//     { src: '/images/awesomeWaves.jpg', alt: 'Wavy hair', text: 'Git', source: '/images/awesomeWaves.jpg' },
//     { src: '/images/coolestBlonde.jpg', alt: 'Blonde', text: '', source: '/images/coolestBlonde.jpg' },
//     { src: '/images/crazyCurls.jpg', alt: 'Curls', text: '', source: '/images/crazyCurls.jpg' },
//     { src: '/images/fourDir.jpg', alt: 'Four Dir', text: '', source: '/images/fourDir.jpg' },
//     { src: '/images/blondeGoat.jpg', alt: 'Blonde2', text: '', source: '/images/blondeGoat.jpg' },
//     { src: '/images/wavy.jpg', alt: 'Wavy2', text: '', source: '/images/wavy.jpg' },
//     { src: '/images/straightWavy.jpg', alt: 'Straight Wavy', text: '', source: '/images/straightWavy.jpg' },
// ];

// const ImageCarousel = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(-1);

//     const handleHover = (index) => {
//         setHoveredIndex(index);
//     };

//     const handleMouseLeave = () => {
//         setHoveredIndex(-1);
//     };

//     return (
//         <>
//             <div className={`mt-10 flex w-full relative overflow-x-hidden`}>
//                 <div className={`flex py-12 ${hoveredIndex !== -1 ? skillsCSS['animate-paused'] : ''} whitespace-nowrap animate-marquee`}>
//                     {imageArray.map((path, index) => (
//                         <div
//                             key={index}
//                             className={`mx-6 hover:scale-150 transition-transform duration-1000 ${hoveredIndex === index ? skillsCSS['animate-paused'] : ''
//                                 }`}
//                             onMouseEnter={() => handleHover(index)}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             <div className={skillsCSS.imageContainer}>
//                                 <Link href={`${path.source}`} target='_blank' rel="noopener noreferrer">
//                                     <Image src={path.src} alt={path.alt} width={150} height={150} className="w-full" />
//                                 </Link>
//                             </div>
//                             <p className="mt-2 text-center text-lg font-medium text-dark dark:text-light">{path.text}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className={`flex absolute top-0 py-12 ${hoveredIndex !== -1 ? skillsCSS['animate-paused'] : ''} whitespace-nowrap animate-marquee2`}>
//                     {imageArray.map((path, index) => (
//                         <div
//                             key={index}
//                             className={`mx-6 hover:scale-150 transition-transform duration-1000 ${hoveredIndex === index ? skillsCSS['animate-paused'] : ''}`}
//                             onMouseEnter={() => handleHover(index)}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             <div className={skillsCSS.imageContainer}>
//                                 <Link href={`${path.source}`} target='_blank' rel="noopener noreferrer">
//                                     <Image src={path.src} alt={path.alt} width={150} height={150} className="w-full" />
//                                 </Link>
//                             </div>
//                             <p className="mt-2 text-center text-lg font-medium text-dark dark:text-light">{path.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ImageCarousel;
function ImageCarousel() {
  return (
    
    <Box className="slider2 bg-offWhite1 sm:hidden">
        <Box className="slide-track2">
            
            {/* first 9 items  */}
            <Box className="slide2">
                <Image src="/images/redHair1.jpg" width="400" alt = "iconImage1" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Straight Red Color</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/familia.jpg" width="400" alt = "iconImage2" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Afro Curls</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/awesomeWaves.jpg" width="400" alt = "iconImage3" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Straight Black </Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/coolestBlonde.jpg" width="400" alt = "iconImage4" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Cool Blonde Cut</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/crazyCurls.jpg" width="400" alt = "iconImage5" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Curly Afro</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/fourDir.jpg" width="400" alt = "iconImage6" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Greeny</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/blondeGoat.jpg" width="400" alt = "iconImage7" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Blonde again</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/wavy.jpg" width="400" alt = "iconImage1" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Wavy Hair</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/straightWavy.jpg" width="400" alt = "iconImage1" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Straight/Wavy Hair</Text> */}
            </Box>
            
            {/* duplicate 9 items */}
            <Box className="slide2">
                <Image src="/images/redHair1.jpg" width="400" alt = "iconImage1" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Red Straight Hair 1</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/familia.jpg" width="400" alt = "iconImage2" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Curly Fam</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/awesomeWaves.jpg" width="400" alt = "iconImage3" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Awesome Waves</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/coolestBlonde.jpg" width="400" alt = "iconImage4" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Cool Blonde Cut</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/crazyCurls.jpg" width="400" alt = "iconImage5" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Curly Afro</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/fourDir.jpg" width="400" alt = "iconImage6" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Greeny</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/blondeGoat.jpg" width="400" alt = "iconImage7" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Blonde Again</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/wavy.jpg" width="400" alt = "iconImage1" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Wavy Hair</Text> */}
            </Box>

            <Box className="slide2">
                <Image src="/images/straightWavy.jpg" width="400" alt = "iconImage1" height="400" borderRadius="lg" />
                {/* <Text color={useColorModeValue("black", "white")}>Straight/Wavy Hair</Text> */}
            </Box>
            
        </Box>
    </Box>
  )
}

export default ImageCarousel