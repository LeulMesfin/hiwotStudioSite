import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Services() {
    return (
        <ChakraProvider>
            <Navbar />

            {/* Services Mobile version */}
            <div className="bg-offWhite1 h-screen flex flex-col items-center overflow-auto">
                <h1 className="text-5xl font-bold text-lightBrown pt-5 pb-11 minmd:pb-3 minmd:text-7xl">Services</h1>

                <div className="text-specialBlack grid minmd:grid-cols-2 minmd:gap-36 minmd:mx-4 minmd:py-5 minmd:mb-5">
                    <div>
                        <h2 className="font-bold text-4xl minmd:text-5xl text-specialBlack md:text-center pb-2">Haircuts</h2>
                        <div className="hidden xmd:block xmd:text-2xl ">
                                        <p>Men's Cut ____________ $35</p>
                                        <p>Women's Cut _________ $75</p>
                        </div>
                        <div className="text-2xl ml-10 my-4 minmd:ml-0 minmd:my-0 xmd:hidden">
                            <p>Men's Cut: $35</p>
                            <p>Women's Cut: $75</p>
                        </div>
                    </div>
                    <hr className="visible w-48 h-1 mx-auto my-5 bg-lightBrown border-0 rounded minmd:hidden"></hr>

                    <div>
                        <h2 className="font-bold text-4xl minmd:text-5xl text-specialBlack md:text-center pb-2">Highlights</h2>
                            <div className="text-2xl ml-10 my-4 minmd:ml-0 minmd:my-0 md:hidden">
                                <p>Root Touch Up ____________$70</p>
                                <p>Face Highlights ____________ $75</p>
                                <p>All Over _________________   $85-100</p>
                                <p>Partial Highlights __________ $95</p>
                                <p>Full Highlights _____________ $120</p>
                            </div>
                            <div className="text-2xl ml-10 my-4 minmd:ml-0 minmd:my-0 minmd:hidden">
                                <p>Root Touch Up: $70</p>
                                <p>Face Highlights: $75</p>
                                <p>All Over: $85-100</p>
                                <p>Partial Highlights: $95</p>
                                <p>Full Highlights: $120</p>
                            </div>
                    </div>
                    <hr className="visible w-48 h-1 mx-auto my-5 bg-lightBrown border-0 rounded minmd:hidden"></hr>

                    <div>
                        <h2 className="font-bold text-4xl minmd:text-5xl text-specialBlack md:text-center pb-2">Phyto Relaxer</h2>
                        <div className="text-2xl ml-10 my-4 minmd:ml-0 minmd:my-0 md:hidden">
                            <p>Root Touch Up ____________ $130</p>
                            <p>Virgin Application __________ $160</p>
                        </div>
                        <div className="text-2xl ml-10 my-4 minmd:ml-0 minmd:my-0 minmd:hidden">
                            <p>Root Touch Up: $130</p>
                            <p>Virgin Application: $160</p>
                        </div>
                    </div>
                    <hr className="visible w-48 h-1 mx-auto my-5 bg-lightBrown border-0 rounded minmd:hidden"></hr>

                    <div>
                        <h2 className="font-bold text-4xl minmd:text-5xl text-specialBlack md:text-center pb-2">Styling</h2>
                        <div className="text-2xl ml-10 my-4 minmd:ml-0 minmd:my-0 md:hidden">
                            <p>Natural Curl __________ $55-65</p>
                            <p>Flat Iron _____________ $65-75</p>
                            <p>Flexi Rods ___________ $100</p>
                        </div>
                        <div className="text-2xl ml-10 my-4 minmd:ml-0 minmd:my-0 minmd:hidden">
                            <p>Natural Curl: $55-65</p>
                            <p>Flat Iron: $65-75</p>
                            <p>Flexi Rods: $100</p>
                        </div>
                    </div>
                    <hr className="visible w-48 h-1 mx-auto my-5 bg-lightBrown border-0 rounded minmd:hidden"></hr>

                </div>

            </div>
                
            <Footer />
        </ChakraProvider>
    )
}

export default Services