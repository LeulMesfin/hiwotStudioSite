import React from "react";
import { ReactNode } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


function ModalFunc() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <button className="readBtn " role="button" onClick={onOpen}>Read More</button>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="xx-large" fontWeight="bold" fontFamily="Noto Serif Display" className="bg-offWhite1 text-lightBrown">More About Me</ModalHeader>
            <ModalCloseButton />
            <ModalBody fontWeight="semibold" fontFamily="Noto Serif Display" className="bg-offWhite1 text-coolBlack">
              {/* <Lorem count={2} /> */}
              After working for three years at Salon Cielo, Hiwot co-founded ‘Salon Revive’, an Aveda concept salon
              in Washington D.C. As co-founder, she led the salon to become one of the most successful
              hair salons in the Washington metropolitan area. She has since moved on and opened her own salon: Hiwot Studio.
            </ModalBody>
  
            <ModalFooter className="bg-offWhite1">
              <Button bg="#C5995C" colorScheme='yellow' mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ModalFunc