import React from 'react';
import './index.css';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import ImgPerfil from '../assets/images/foto_perfil.jpg';

const Header = () => {
    return (
      <header className="bg-white rounded-lg mt-16 flex p-5 items-center">
        <div className="w-72 h-64 bg-gray-400 rounded-md mr-3">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={ImgPerfil}
            alt="foto de perfil"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-start">
          <div className="flex justify-between w-full mb-5">
            <div>
              <h1 className="text-2xl font-bold">Pablo Orozco</h1>
              <h2 className="text-xl font-light">Frontend Developer</h2>
            </div>
            <div className="text-left text-md">
              <div className="flex items-center">
                <MdEmail className="mr-2" />
                <p>pabloorozco2712@gmail.com</p>
              </div>
              <a
                href="https://wa.me/50230366803"
                target="_blank"
                className="flex items-center"
              >
                <ImPhone className="mr-2" />
                <p>(+502) 3026 6803</p>
              </a>
            </div>
          </div>
          <p className="mb-3 text-justify">
            Soy un programador web junior entusiasta y apasionado que está
            buscando oportunidades para adquirir experiencia y crecer
            profesionalmente. Me apasiona el desarrollo web y tengo
            conocimientos sólidos en lenguajes como HTML, CSS y JavaScript, así
            como experiencia en el uso de frameworks como React y TailwindCss
          </p>
          <p>
            Si estás buscando un programador web junior motivado y comprometido,
            estaré encantado de unirme a tu equipo. Estoy abierto a
            oportunidades de pasantías, proyectos a corto plazo o colaboraciones
            freelance.
          </p>
        </div>
      </header>
    );
};

export default Header;