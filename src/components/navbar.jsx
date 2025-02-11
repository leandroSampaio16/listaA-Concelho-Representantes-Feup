import React from "react";
import logoSvg from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="absolute w-full z-20">
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <img
            src={logoSvg}
            className="h-12 m-8"
            alt="Logo"
          />
        </a>
        <div className="flex items-center lg:order-2">

        
        
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 mr-8 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center ml-auto justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
              <a
                href="https://www.instagram.com/listaa.crfeup?igsh=MWtjYnNleXFnbmh5bg=="
                className="block py-2 pl-3 pr-4 text-[#1E5BFE] md:text-black border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#1E5BFE] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://ugc.production.linktr.ee/0bbead99-8930-4191-931f-d616fdd605b8_Manifesto-Lista-A.pdf"
                className="block py-2 pl-3 pr-4 text-[#1E5BFE] md:text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#1E5BFE] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                Manifesto | Medidas
              </a>
            </li>
            <li>
              <a
                href="https://tally.so/r/3qYW4Y"
                className="block py-2 pl-3 pr-4 text-[#1E5BFE] md:text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#1E5BFE] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Formulário de sugestões
              </a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
