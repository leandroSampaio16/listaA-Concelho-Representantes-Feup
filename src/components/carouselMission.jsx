import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import rocketSvg from "../assets/rocket.svg";
import megaPhoneSvg from "../assets/megaPhone.svg";
import balloonSvg from "../assets/balloon.svg";
import clickSvg from "../assets/click.svg";

const CarouselMission = () => {
  const slides = [
    {
      id: 1,
      img: clickSvg,
      imgIcon: rocketSvg,
      title: "Funcionamento da FEUP",
      title1: "Aumentar o número de salas de estudo",
      description1:
        "De forma a promover o sucesso académico dos estudantes, promovemos a implementação de mais salas de estudo na FEUP, noturnas e de trabalho em grupo.",
      title2: "Apostar na digitalização, modernização e acessibilidade da FEUP",
      description2:
        "Digitalizar o cartão de estudante, permitir a compra de senhas para a cantina através de plataformas digitais e disponibilizar informação em tempo real sobre os lugares livres no parque de estacionamento.",
      bgColor: "#E7EEFF",
      textColor: "#1E5BFE",
    },
    {
      id: 2,
      img: clickSvg,
      imgIcon: megaPhoneSvg,
      title: "Educação e Inovação",
      title1: "Fomentar a contratação de professores de cariz internacional e do meio empresarial",
      description1:
        "Apostar mais na contratação de professores convidados de cariz internacional e do meio empresarial, de forma a aumentar a perceção dos estudantes quanto ao mundo real.",
      title2: "Participação da FEUP na Web Summit 2025",
      description2:
        "Destacar o talento e o espírito inovador da FEUP com a criação de uma banca na Web Summit, seguindo a prática adotada por outras universidades portuguesas.",
      bgColor: "#FFF4D2",
      textColor: "#FFCE2F",
    },
    {
      id: 3,
      img: clickSvg,
      imgIcon: balloonSvg,
      title: "Transparência e Integração",
      title1: "Implementação de um canal de comunicação entre os estudantes e os representantes",
      description1:
        "Criar um formulário, anónimo, constantemente disponível no nosso website e redes sociais, para todos os alunos levantarem os seus problemas e preocupações que gostavam que fossem debatidos nas reuniões.",
      title2: "Divulgação das atas das reuniões",
      description2:
        "Por forma  aumentar a transparência, após cada reunião, divulgaremos de forma direta a ata com o que foi discutido e as mudanças apresentadas.",
      bgColor: "#E7EEFF",
      textColor: "#1E5BFE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

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
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="w-full flex-shrink-0 px-4"
            style={{ flexBasis: "100%" }}
            animate={{
              height: isExpanded ? "950px" : "300px",
              scale: isExpanded ? 1.05 : 1,
              opacity: isExpanded ? 1 : 0.9,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            onClick={toggleExpand}
          >
            <div
              className="p-8 pb-20 rounded-3xl w-4/5 h-full mx-auto relative"
              style={{ backgroundColor: slide.bgColor }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute top-8 right-8 h-12 w-12"
              />
              <h3
                className="text-3xl pt-20 pb-2 text-left font-semibold"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: slide.textColor,
                }}
              >
                {slide.title}
              </h3>
              <motion.img
                src={slide.imgIcon}
                alt={`${slide.title} Icon`}
                className="absolute transition-transform"
                style={{
                  right: isExpanded ? "20vw" : "2vw",
                  bottom: isExpanded ? "2vh" : "0vh",
                }}
                animate={{
                  height: isExpanded ? "20vh" : index === 0 ? "18vh" : "15vh",
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              />
              {isExpanded && (
                <motion.div
                  className="mt-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="font-bold text-lg my-8" style={{ color: slide.textColor }}>
                    {slide.title1}
                  </h4>
                  <p className="text-sm text-gray-600 mb-8">{slide.description1}</p>
                  <h4 className="font-bold text-lg mt-4 mb-8 " style={{ color: slide.textColor }}>
                    {slide.title2}
                  </h4>
                  <p className="text-sm text-gray-600">{slide.description2}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all`}
            style={{
              backgroundColor: index === currentIndex ? "#FFF4D2" : "#D9D9D9",
              opacity: index === currentIndex ? 1 : 0.5,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMission;
