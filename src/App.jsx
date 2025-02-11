import { useState } from "react";
import mainPng from "./assets/main.png";
import logoSvg from "./assets/logo.svg";
import clipBoardSvg from "./assets/icons/clipboard.svg";
import gearSvg from "./assets/icons/gear.svg";
import puzzleSvg from "./assets/icons/puzzle.svg";
import vectorBackgroundSvg from "./assets/VectorBackground.svg";
import rocketSvg from "./assets/rocket.svg";
import megaPhoneSvg from "./assets/megaPhone.svg";
import balloonSvg from "./assets/balloon.svg";
import vectorBackgroundYellowSvg from "./assets/vectorBackgroundYellow.svg";
import teamImageSvg from "./assets/teamImage.png";
import duarteSvg from './assets/duarte.png'
import leandroSvg from './assets/leandro.png'
import pedroSvg from './assets/pedro.png'
import marianaSvg from './assets/mariana.png'
import CarouselCr from "./components/carouselCr";
import CarouselMission from "./components/carouselMission";
import Navbar from "./components/navbar";

const teamMembers = [
  {
    name: "Pedro Marques",
    image: pedroSvg,
    linkedin: "https://www.linkedin.com/in/pedromcm23/",
  },
  {
    name: "Leandro Sampaio",
    image: leandroSvg,
    linkedin: "https://www.linkedin.com/in/leandrosampaio16/",
  },
  {
    name: "Mariana Almeida",
    image: marianaSvg,
    linkedin: "https://www.linkedin.com/in/mariana-fernandes-almeida/",
  },
  {
    name: "Duarte Monteiro",
    image: duarteSvg,
    linkedin: "https://www.linkedin.com/in/duarte-santos-monteiro/",
  },
];

function App() {
  return (
  <div className="bg-[#FBFAF9]">
      {/* Header Section */}


<Navbar></Navbar>
 
<header className="flex flex-col md:flex-row md:justify-between md:items-center h-screen w-full py-16 md:px-24 bg-white">
 

  <div className="w-full md:w-3/5 text-left pt-24 md:pt-0 md:mx-12 mx-10">
    <h1 className="text-4xl md:text-6xl font-medium text-gray-800 pt-8 md:pt-20"
    >
      Por Ti <br />
      Pela Mudança <br />
      <span className="text-blue-600">Pelo teu Futuro.</span>
    </h1>
  </div>
  <div className="w-full md:w-3/5 m-0 flex justify-center justify-items-center mt-16 relative">

  <img
    src={mainPng}
    alt="Team Photo"
    className="w-4/5 md:w-full h-auto mx-auto p-0 relative z-10"
  />
</div>

<img
    src={vectorBackgroundYellowSvg}
    alt="Background"
    className="absolute bottom-0 right-0 w-[70vw] h-auto z-0 object-cover blur-xl md:hidden"
  />

  
</header>  

    <div className="w-full md:hidden h-[80vh]">
    <h2 className="text-center text-2xl font-semibold py-[7vh]">
          O que é o Conselho de Representantes?
        </h2>
    <CarouselCr></CarouselCr>
    </div>

      {/* Card Section */}
      <section className="py-20 md:block hidden">
        <h2 className="text-center text-2xl font-semibold mb-[15vh]">
          O que é o Conselho de Representantes?
        </h2>
        <div className="w-3/4 mx-auto flex justify-center space-x-24">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg border-b-[3px] w-1/3 relative">
            <img
              src={gearSvg}
              alt="Example SVG"
              className="absolute top-8 left-8 h-[51px] w-[51px]"
            />
            <h3
              className="text-[25px] leading-[30px] pt-20 text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Desenvolvimento Estratégico
            </h3>
            <p
              className="text-[14px] leading-[20.94px] pt-5 pb-16 text-left text-[#6f6f6f] font-semibold"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Propor iniciativas para melhorar o funcionamento da FEUP e decidir sobre mudanças em unidades de investigação, após consulta ao Conselho Científico.
            </p>

            <div className="border-t-[2px] border-black w-3/4 ml-auto"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFF4D2] p-8 rounded-lg shadow-[10px_5px_10px_rgba(0,0,0,0.1)] border-b-[3px] w-1/3 relative">
            <img
              src={clipBoardSvg}
              alt="Example SVG"
              className="absolute top-8 left-8 h-[51px] w-[51px]"
            />
            <h3
              className="text-[25px] leading-[30px] pt-20 text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Supervisão e Avaliação
            </h3>
            <p
              className="text-[14px] leading-[20.94px] pt-5 pb-16 text-left text-[#6f6f6f] font-semibold"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Apreciar atos do Diretor e do Conselho Executivo, promovendo uma
              gestão responsável e transparente.
            </p>

            <div className="border-t-[2px] border-[#FFC60D] w-3/4 ml-auto"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg border-b-[3px] w-1/3 relative">
            <img
              src={puzzleSvg}
              alt="Example SVG"
              className="absolute top-8 left-8 h-[51px] w-[51px]"
            />
            <h3
              className="text-[25px] leading-[30px] pt-20 text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Gestão Institucional
            </h3>
            <p
              className="text-[14px] leading-[20.94px] pt-5 pb-16 text-left text-[#6f6f6f] font-semibold"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Coordenar a eleição para Diretor da FEUP e aprovar o regulamento interno e alterações estatutárias da instituição.
            </p>

            <div className="border-t-[2px] border-black w-3/4 ml-auto"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}

      <div className="w-full h-auto relative">
  <div className="w-full md:hidden h-auto pb-[7vh]">
    <h2 className="text-center text-2xl font-semibold py-[7vh]">
      A nossa Missão
    </h2>
    <CarouselMission />
  </div>
</div>


      <section className="py-16 px-16 bg-white md:block hidden">
        <h2 className="text-center text-2xl font-semibold my-[10vh]">
          A nossa Missão
        </h2>

        {/* Mission Block 1 */}
        <div
          className="flex items-center bg-[#E7EEFF] pl-24 rounded-xl"
          style={{
            boxShadow: "-10px 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex-1 pt-14">
            <h3
              className="font-[500] text-[3em] leading-[76px] text-[#1E5BFE] tracking-[-0.01em] text-justify"
              style={{
                fontFamily: "Outfit, sans-serif",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Funcionamento da FEUP
            </h3>
            <p className="text-gray-600 mt-2 font-bold text-xl">
              Aumentar o número de salas de estudo
            </p>
            <p className="text-gray-600 mt-4">
              De forma a promover o sucesso académico dos estudantes, promovemos a implementação de mais salas de estudo na FEUP, noturnas e de trabalho em grupo.
            </p>
            <p className="text-gray-600 mt-10 font-bold text-xl">
              Apostar na digitalização, modernização e acessibilidade da FEUP
            </p>
            <p className="text-gray-600 mt-4 mb-14">
              Digitalizar o cartão de estudante, permitir a compra de senhas para a cantina através de plataformas digitais e disponibilizar informação em tempo real sobre os lugares livres no parque de estacionamento.
            </p>
          </div>
          <div className="relative w-1/2 h-[50vh] mx-auto">
            <img
              src={vectorBackgroundSvg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover blur-xl"
            />
            <img
              src={rocketSvg}
              alt="Foreground"
              className="absolute inset-0 m-auto w-auto h-4/5 object-contain z-10"
            />
            <div className="absolute bottom-[4vh] right-[2vw] border-t-[2px] border-[#1E5BFE] w-1/4"></div>
          </div>
        </div>

        {/* Mission Block 2 */}
        <div
          className="flex items-center bg-[#FFF4D2] pl-24 rounded-2xl"
          style={{
            boxShadow: "-10px 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex-1 pt-14">
            <h3
              className="font-[500] text-[3em] leading-[76px] text-[#FFCE2F] "
              style={{
                fontFamily: "Outfit, sans-serif",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Educação e Inovação
            </h3>
            <p className="text-gray-600 mt-2 font-bold text-xl">
              Fomentar a contratação de professores de cariz internacional e do meio empresarial
            </p>
            <p className="text-gray-600 mt-4">
              Apostar mais na contratação de professores convidados de cariz internacional e do meio empresarial, de forma a aumentar a perceção dos estudantes quanto ao mundo real.
            </p>
            <p className="text-gray-600 mt-10 font-bold text-xl">
              Participação da FEUP na Web Summit 2025
            </p>
            <p className="text-gray-600 mt-4 mb-14">
              Destacar o talento e o espírito inovador da FEUP com a criação de uma banca na Web Summit, seguindo a prática adotada por outras universidades portuguesas.
            </p>
          </div>
          <div className="relative w-1/2 h-[50vh] mx-auto">
            <img
              src={vectorBackgroundSvg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover blur-xl"
            />
            <img
              src={megaPhoneSvg}
              alt="Foreground"
              className="absolute inset-0 m-auto w-auto h-4/5 object-contain z-10"
            />
            <div className="absolute bottom-[4vh] right-[2vw] border-t-[2px] border-[#FFCE2F] w-1/4"></div>
          </div>
        </div>

        {/* Mission Block 3 */}
        <div
          className="flex items-center bg-[#E7EEFF] pl-24 rounded-xl"
          style={{
            boxShadow: "-10px 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex-1 pt-14">
            <h3
              className="font-[500] text-[3em] leading-[76px] text-[#1E5BFE] tracking-[-0.01em] text-justify"
              style={{
                fontFamily: "Outfit, sans-serif",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Transparência e Integração
            </h3>
            <p className="text-gray-600 mt-2 font-bold text-xl">
              Implementação de um canal de comunicação entre os estudantes e os representantes
            </p>
            <p className="text-gray-600 mt-4">
              Criar um formulário, anónimo, constantemente disponível no nosso website e redes sociais, para todos os alunos levantarem os seus problemas e preocupações que gostavam que fossem debatidos nas reuniões.
            </p>
            <p className="text-gray-600 mt-10 font-bold text-xl">
              Divulgação das atas das reuniões
            </p>
            <p className="text-gray-600 mt-4 mb-14">
              Por forma  aumentar a transparência, após cada reunião, divulgaremos de forma direta a ata com o que foi discutido e as mudanças apresentadas.
            </p>
          </div>
          <div className="relative w-1/2 h-[50vh] mx-auto">
            <img
              src={vectorBackgroundSvg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover blur-xl"
            />
            <img
              src={balloonSvg}
              alt="Foreground"
              className="absolute inset-0 m-auto w-auto h-3/5 object-contain z-10"
            />
            <div className="absolute bottom-[4vh] right-[2vw] border-t-[2px] border-[#1E5BFE] w-1/4"></div>
          </div>
        </div>
      </section>
      
      <section className="w-full flex flex-col md:flex-row items-center relative mt-[5vh]">
        <div className="relative md:w-4/5 w-full flex flex-col md:flex-row items-center w-5/6 mx-auto p-8 rounded-lg">
          {/* Background Image */}
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <img
              src={vectorBackgroundYellowSvg}
              alt="Background"
              className="w-2/3 h-auto object-cover blur-xl"
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row items-center relative mt-[5vh]">
  <div className="relative md:w-4/5 w-full flex flex-col md:flex-row items-center w-5/6 mx-auto p-8 rounded-lg">
    {/* Background Image */}
    <div className="absolute inset-0 flex justify-center items-center z-0">
      <img
        src={vectorBackgroundYellowSvg}
        alt="Background"
        className="w-2/3 h-auto object-cover blur-xl"
      />
    </div>

    {/* Title Section */}
    <div className="w-full relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4 pl-0 md:pl-8 mb-4 md:mb-0">
      <h1
        className="font-[500] text-[2.5em] md:text-[3.5em] leading-[40px] md:leading-[60px] tracking-[-0.01em]"
        style={{
          fontFamily: "Outfit, sans-serif",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        2 de dezembro
      </h1>
      <p
        className="font-[500] text-[2.5em] md:text-[3.5em] leading-[40px] md:leading-[60px] tracking-[-0.01em] text-blue-600"
        style={{
          fontFamily: "Outfit, sans-serif",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Vota A!
      </p>
    </div>

    {/* Image Section */}
    <div className="relative z-10 flex-shrink-0 w-full md:w-[60%]">
      <img
        src={teamImageSvg}
        alt="Team photo"
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
</section>

     {/* Team Section */}
<section className="container mx-auto pt-24">
  <h2 className="text-3xl font-bold text-center mb-12">
    Conhece a Equipa
  </h2>



  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-[5vh]">
    {teamMembers.map((member) => (
      <div key={member.name} className="flex flex-col md:items-start items-center space-y-2">
        <img src={member.image} alt={member.name} className="h-3/4 w-auto object-cover" />
        <div className="pl-4 w-3/4">
          <h2 className="text-lg font-semibold">{member.name}</h2>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            LinkedIn
          </a>
        </div>
      </div>
    ))}
  </div>

</section>

    </div>
  );
}

export default App;
