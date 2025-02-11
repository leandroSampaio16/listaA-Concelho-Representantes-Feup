
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import clipBoardSvg from "../assets/icons/clipboard.svg";
import gearSvg from "../assets/icons/gear.svg";
import puzzleSvg from "../assets/icons/puzzle.svg";

const CarouselCr = () => {
  const slides = [
    {
      id: 1,
      img: gearSvg,
      title: "Desenvolvimento Estratégico",
      description:
        "Propor iniciativas para melhorar o funcionamento da FEUP e decidir sobre mudanças em unidades de investigação, após consulta ao Conselho Científico.",
      bgColor: "#FFFFFF",
      lineColor: "#4D4D4D",
      textColor: "#001635",
    },
    {
      id: 2,
      img: clipBoardSvg,
      title: "Supervisão e Avaliação",
      description:
        "Apreciar atos do Diretor e do Conselho Executivo, promovendo uma gestão responsável e transparente.",
      bgColor: "#FFF4D2",
      lineColor: "#FFC60D",
      textColor: "#2C3E50",
    },
    {
      id: 3,
      img: puzzleSvg,
      title: "Gestão Institucional",
      description:
        "Coordenar a eleição para Diretor da FEUP e aprovar o regulamento interno e alterações estatutárias da instituição.",
        bgColor: "#FFFFFF",
        lineColor: "#4D4D4D",
        textColor: "#2C3E50",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "LEFT" && currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (direction === "RIGHT" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full max-w-lg mx-auto overflow-hidden"
    >
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
     <div
     key={slide.id}
     className="w-full flex-shrink-0 px-4"
     style={{ flexBasis: "100%" }}
   >
    <div
  className="p-8 rounded-2xl w-4/5 mx-auto relative"
  style={{
    height: "auto", // Allow content to determine the height
    minHeight: "40vh", 
    backgroundColor: slide.bgColor// Ensure a minimum height
  }}
>

       <img
         src={slide.img}
         alt="Example SVG"
         className="absolute top-8 left-8 h-[51px] w-[51px]"
       />
       <h3
         className="text-[25px] leading-[30px] pt-20 text-left"
         style={{
           fontFamily: "Montserrat, sans-serif",
           color: slide.textColor,
         }}
       >
         {slide.title}
       </h3>
       <p
         className="text-[14px] leading-[20.94px] pt-5 pb-12 text-left"
         style={{
        
           color: slide.textColor,
         }}
       >
         {slide.description}
       </p>
      
     
     <div
     className="w-2/4 pb-0 ml-auto"
     style={{
       borderColor: slide.lineColor,
       borderTopWidth: "2px",
       borderTopStyle: "solid",
     }}
   >
   </div>
   
     </div>
   </div>
   
        ))}
      </div>

      <div className="flex justify-center space-x-2 my-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all`}
            style={{
              backgroundColor: index === currentIndex ? "#FFF4D2" : "#D9D9D9",
              opacity: index === currentIndex ? 1 : 0.3,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCr;
