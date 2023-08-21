import { useState, useEffect, useRef } from "react"; 
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const slidesContainerStyles = {
  display: 'flex',
  height: '100%',
  transition: 'transform ease-out 0.9s'
}

const slidesContainerOverflowStyles = {
  overflow: 'hidden',
  height: '100%'
}

const ImageSlider = ({slides, parentWidth}) => {
    let idGlobal;
    const intervalInMilliseconds = 2000;
    const timerRef = useRef(null);

    const [currIdx, setCurrIdx] = useState(0);
    
    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currIdx].url})`,
        transition: `1000ms ease-in-out 2s`
    };

    const leftArrow = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
    };
    
    const rightArrow = {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      right: '32px',
      fontSize: '45px',
      color: '#fff',
      zIndex: 1,
      cursor: "pointer",
    };
    
    const prevImg = () => {
      const isFirstImg = currIdx === 0;
      const newIdx = isFirstImg ? slides.length - 1 : currIdx - 1;
      console.log(`Previous Image: ${newIdx}`);
      setCurrIdx(newIdx);
    };
    
    const nextImg = () => {
      const isLastSlide = currIdx === slides.length - 1;
      const newIdx = isLastSlide ? 0 : currIdx + 1;
      console.log(`Next Image: ${newIdx}`);
      setCurrIdx(newIdx);
    };
    
    const visitSlide = (slideIdx) => {
      setCurrIdx(slideIdx);
    };

    const getSlideStylesWithBackground = (slideIndex) => ({
      ...slideStyles,
      backgroundImage: `url(${slides[slideIndex].url})`,
      width: `${parentWidth}px`,
    });

    const getSlidesContainerStylesWithWidth = () => ({
      ...slidesContainerStyles,
      width: parentWidth * slides.length,
      transform: `translateX(${-(currIdx * parentWidth)}px)`,
    })
    
    useEffect(() => {
      console.log('use effect');
      timerRef.current = setTimeout(() => {
        nextImg()
      }, 4000)
    },)
    // useEffect(() => {
    //   const intervalId = setInterval(nextImg, intervalInMilliseconds);

    //   return () => {
    //     clearInterval(intervalId);
    //   };
    // }); 
      
    return (
        <div style={sliderStyles} className="">
           
            {/* <div style={leftArrow} onClick={prevImg} className="">
              <FaAngleLeft />

            </div>
            <div style={rightArrow} onClick={nextImg} className="cursor-pointer">
              <FaAngleRight />
            </div> */}
            {/* <div style={slidesContainerOverflowStyles}>
              <div style={getSlidesContainerStylesWithWidth()}>
                {slides.map((_, slideIndex) => (
                  <div key={slideIndex} style={getSlideStylesWithBackground(slideIndex)}> </div>
                ))}
              </div>
            </div> */}
            
            {/* <div style={slideStylesWithBackground}></div> */}

            {/* Hide the slideshow once the screen width is <= 820 width (md:hidden) */}
            <div className=" " style={slideStyles} ></div>   
        </div>
    )
    
};

export default ImageSlider;