import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChakraProvider, Button, useColorModeValue } from '@chakra-ui/react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaCircleNotch, FaCheckSquare } from 'react-icons/fa';
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";




function Contact() {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Send");
    const [loading, setLoading] = useState("");

    function sendEmail(e) {
        e.preventDefault();
        
        setLoading("true");
        setTimeout(() => {
            setButtonText('Send');
            setLoading(false);
        }, 2000);

        emailjs.send("service_xkq63ku", "template_komxyxp", {
          user_name: e.target[0].value,
          user_email: e.target[1].value,
          user_phone_num: e.target[2].value,
          message: e.target[3].value,
        }, "Vkv-o4KqVzdyKd4QI")
        .then(() => {
          setLoading("");
          setButtonText("Sent!");
          e.target.reset();
        }, 
        () => {
          setLoading("");
          setButtonText("Error!");
          e.target.reset();
        });
      }

    return (
        <ChakraProvider>
            <Navbar />

            {/* Laptop version */}
            <div className="bg-offWhite1 xmaxmd:hidden">
                <div className="flex w-full min-h-screen justify-center items-center">
                    <div className="flex flex-row space-x-24 bg-offWhite1 border-2 border-coolBlack w-full max-w-4xl p-8 rounded-xl shadow-lg text-lightBrown">
                        
                        <div className="flex flex-col space-y-8 justify-between">
                            <div>
                                <h1 className="font-bold text-4xl tracking-wide">Contact Me</h1>
                                
                            </div> 
                            <div className="mapBody">
                                <iframe 
                                    className="rounded-2xl"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.43720056316!2d-77.09927428887453!3d38.98251717158805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c97b7e2526f3%3A0x82e61578f2aa8f14!2s4908%20Hampden%20Ln%2C%20Bethesda%2C%20MD%2020814!5e0!3m2!1sen!2sus!4v1685764442495!5m2!1sen!2sus" 
                                    width="350" 
                                    height="300" 
                                    style={{ border: "0" }} 
                                    loading="lazy" 
                                    // referrerPolicy="no-referrer-when-downgrade"
                                    
                                ></iframe>
                            </div>
                            <div className="flex flex-col space-y-6">
                                <div className="inline-flex space-x-2 items-center">
                                    <BsFillTelephoneFill className="text-lightBrown text-xl" />
                                    <span>(301) 228-0130</span>
                                </div>

                                <div className="inline-flex space-x-2 items-center">
                                    <FaEnvelope className="text-lightBrown text-xl" />
                                    <span>hiwotstudio@gmail.com</span>
                                </div>

                                <div className="inline-flex space-x-2 items-center">
                                    <FaMapMarkerAlt className="text-lightBrown text-xl" />
                                    <span>4908 Hampden Ln, Bethesda, MD 20814</span>
                                </div>
                            </div> 
                        </div> 
                        <div className="bg-offWhite1 border-2 border-coolBlack rounded-xl shadow-lg p-8 w-96">
                            <form action="" onSubmit={sendEmail} ref={form} method="post" className="flex flex-col space-y-4">
                                <div>
                                    <label className="text-sm text-gray-600">Name</label>
                                    <input type="text" name="user_name" placeholder="" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-lightBrown text-specialBlack bg-offWhite1" required></input>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Email</label>
                                    <input type="email" name="user_email" placeholder="" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-lightBrown text-specialBlack bg-offWhite1" required></input>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Phone</label>
                                    <input type="tel" name="user_phone_num" placeholder="" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-lightBrown text-specialBlack bg-offWhite1" required></input>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Message</label>
                                    <textarea placeholder="Message" name="message" rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-lightBrown text-specialBlack bg-offWhite1 required" />
                                </div>

                            
                                {/* <button type="submit" className="bg-coolBlack text-offWhite1 font-bold rounded-lg px-6 py-2 uppercase text-sm">
                                   Send Message
                                </button> */}
                                <Button type = "submit" isLoading = {loading} loadingText="Sending" color={useColorModeValue("white", "black")} bg={useColorModeValue("black", "white")}>{buttonText}</Button>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className="bg-offWhite1 overflow-x-auto xminmd:hidden">
                <div className="flex w-full h-full justify-center items-center pt-10 pb-10">
                    <div className="flex flex-col">
                        <div>
                            <h1 className="font-bold text-center text-4xl tracking-wide pb-5 text-lightBrown">Contact Me</h1>
                        </div> 
                        <div className="bg-offWhite1 border-2 border-coolBlack rounded-xl shadow-lg p-8 w-80">
                            <form action="" onSubmit={sendEmail} ref={form} method="post" className="flex flex-col space-y-4">
                                <div>
                                    <label className="text-sm text-coolBlack">Name</label>
                                    <input type="text" name="user_name" placeholder="" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-lightBrown text-specialBlack " required></input>
                                </div>
                                <div>
                                    <label className="text-sm text-coolBlack">Email</label>
                                    <input type="email" name="user_email" placeholder="" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-lightBrown text-specialBlack " required></input>
                                </div>
                                <div>
                                    <label className="text-sm text-coolBlack">Phone</label>
                                    <input type="tel" name="user_phone_num" placeholder="" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-lightBrown text-specialBlack " required></input>
                                </div>
                                <div>
                                    <label className="text-sm text-coolBlack">Message</label>
                                    <textarea placeholder="Message" name="message" rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-lightBrown text-specialBlack  required" />
                                </div>
                            
                                {/* <button type="submit" className="bg-coolBlack text-offWhite1 font-bold rounded-lg px-6 py-2 uppercase text-sm">
                                Send Message
                                </button> */}
                                <Button type = "submit" isLoading = {loading} loadingText="Sending" color={useColorModeValue("white", "black")} bg={useColorModeValue("black", "white")}>{buttonText}</Button>
                            </form>
                        </div> 
                        
                        <div className="inline-flex space-x-2 items-center pt-8 pb-5">
                                    <BsFillTelephoneFill className="text-lightBrown text-xl" />
                                    <span>(301) 228-0130</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center pb-5">
                                    <FaEnvelope className="text-lightBrown text-xl" />
                                    <span>hiwotstudio@gmail.com</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                                    <FaMapMarkerAlt className="text-lightBrown text-xl" />
                                    <span>4908 Hampden Ln, Bethesda, MD 20814</span>
                        </div>    
                    </div>     
                </div>
            </div>
            




            <Footer />
        </ChakraProvider>
    )
}

export default Contact