import React from 'react';
import './style.css';
import Contacto from '../Contacto';

const Experiencia = () => {
    return (
      <div className='flex flex-col'>
        <div className=" bg-white p-5 rounded-md div_exp mr-9">
          <h5 className="font-bold text-xl mb-4">FRONT END</h5>
          {/* lista de experiencia  */}
          <ul className="flex flex-col justify-center text-xl font-light lista_exp">
            {/* react */}
            <li className="flex justify-center items-center">
              <p className="w-1/4">React.Js</p>
              {/* barra de progreso */}
              <div className="bar-container w-3/4 rounded-md">
                <div className="bar rounded-md" style={{ width: "70%" }} />
              </div>
            </li>
            {/* html */}
            <li className="flex justify-center items-center">
              <p className="w-1/4">HTML</p>
              {/* barra de progreso */}
              <div className="bar-container w-3/4 rounded-md">
                <div className="bar rounded-md" style={{ width: "80%" }} />
              </div>
            </li>
            {/* javaScript */}
            <li className="flex justify-center items-center">
              <p className="w-1/4">JavaScript</p>
              {/* barra de progreso */}
              <div className="bar-container w-3/4 rounded-md">
                <div className="bar rounded-md" style={{ width: "75%" }} />
              </div>
            </li>
            {/* css */}
            <li className="flex justify-center items-center">
              <p className="w-1/4">CSS</p>
              {/* barra de progreso */}
              <div className="bar-container w-3/4 rounded-md">
                <div className="bar rounded-md" style={{ width: "73%" }} />
              </div>
            </li>
            {/* tailwind */}
            <li className="flex justify-center items-center">
              <p className="w-1/4">TailwindCss</p>
              {/* barra de progreso */}
              <div className="bar-container w-3/4 rounded-md">
                <div className="bar rounded-md" style={{ width: "78%" }} />
              </div>
            </li>
            {/* node */}
            <li className="flex justify-center items-center">
              <p className="w-1/4">Node.Js</p>
              {/* barra de progreso */}
              <div className="bar-container w-3/4 rounded-md">
                <div className="bar rounded-md" style={{ width: "30%" }} />
              </div>
            </li>
          </ul>
        </div>

        {/* tabla de contacto  */}
        <Contacto></Contacto>
      </div>
    );
};

export default Experiencia;