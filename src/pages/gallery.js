import { ChakraProvider, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCarousel from '../components/imageCarousel';
import ImageSlider from '../components/ImageSlider';

const slides = [
    { url: "/images/redHair1.jpg", title: 'red1' },
    { url: "/images/familia.jpg", title: 'family' },
    { url: "/images/awesomeWaves.jpg", title: 'waves1' },
    { url: "/images/coolestBlonde.jpg", title: 'blonde' },
    { url: "/images/crazyCurls.jpg", title: 'curls' },
    { url: "/images/fourDir.jpg", title: 'fourDir' },
    { url: "/images/blondeGoat.jpg", title: 'blonde2' },
    { url: "/images/wavy.jpg", title: 'wavy2' },
    { url: "/images/straightWavy.jpg", title: 'wavy3' },
];

const containerStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    // width: '350px',
    // height: '400px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#FFF7F2'
};

function Gallery() {
    return (
        <ChakraProvider>
            <Navbar />
            <div className='flex justify-center bg-offWhite1 w-full h-full'>
                <h1 className="items-center text-lightBrown font-bold text-5xl py-6">My Work</h1>
                {/* <ImageCarousel /> */}
            </div>
            
            <ImageCarousel className=''/>
            <div className="minsm:hidden" style={containerStyles}>
                <div className='w-[350px] h-[400px] ml-5 pb-10'>
                    <ImageSlider className="" slides={slides} parentWidth={150} /> 
                </div>
                {/* <ImageSlider className="" slides={slides} parentWidth={150} />  */}
                {/* <div className="headerContainer1 minsm:hidden w-full h-full" >
                    <ImageSlider className="" slides={slides} parentWidth={150} /> 
                    
                </div> */}
            </div>
            
            {/* <div style={containerStyles} className='bg-offWhite1 border-2 border-coolBlack rounded-[10px]'>
                <ImageSlider slides={slides} />
            </div> */}
            
            <Footer />
        </ChakraProvider>
    )
}

export default Gallery