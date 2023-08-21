import { ChakraProvider, extendTheme  } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import pic1 from '../../public/images/dalle1.png';
import pic2 from '../../public/images/dalle2.png';
import ModalFunc from '../components/ModalFunc';


const theme = extendTheme({
    colors: {
      brand: {
        100: "#2C2C2C",
        
      },
    },
})


function About() {
    return (
        <ChakraProvider theme={theme}>
            <Navbar />


            {/* Laptop version */}
            <div className="hidden xmd:block flex-row justify-center bg-offWhite1 w-full h-full">
                <div className="z-1 bg-offWhite1 h-screen w-3/12 relative">
                    
                </div>

                <div className="flex flex-row justify-between gap-y-6  z-1  bg-transparent   h-96 w-[60rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
                    <div className="bg-offWhite1 w-[30rem] h-full ">
                        <Image className="rounded-lg shadow-2xl"
                            src={pic1}
                            alt="pic1"
                            width="500rem"
                            object-fit="fill"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-[47%] bg-transparent text-center px-4 "> 

                        <h1 className="text-5xl pb-10 font-semibold text-lightBrown">About Me</h1>
                        <p className='pb-10 px-5 opacity-80 font-bold'>
                            Hiwot Studio is a Salon run by hair aficionado Hiwot Aberra. With over 20 years of experience,
                            Hiwot takes pride in having each customer feel confident and look great upon leaving her studio.
                        </p>
                        
                        <div className="pl-1">
                            <ModalFunc  />
                        </div>
                        
                        

                    </div>
                    <div className="bg-offWhite1 w-[30rem] h-full">
                        <Image className="rounded-lg box shadow-2xl"
                            src={pic2}
                            alt="pic2"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
            
            {/* Mobile version */}
            <div className='flex flex-col items-center xmd:hidden'>
                
                <h1 className="text-5xl pt-10 pb-10 font-semibold text-lightBrown">About Me</h1>
                <p className='pb-10 px-5 opacity-80'>
                    Hiwot Studio is a Salon run by hair aficionado Hiwot Aberra. With over 20 years of experience,
                    Hiwot takes pride in having each customer feel confident and look great upon leaving her studio.
                </p>


                <div className="w-[85%] pb-20">
                    <Image className="rounded-lg box "
                        src={pic2}
                        alt="pic2"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>


            <Footer />
        </ChakraProvider>
    )
}

export default About