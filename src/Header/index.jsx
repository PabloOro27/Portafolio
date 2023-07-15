import React from 'react';
import './index.css';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const Header = () => {
    return (
      <header className="bg-white rounded-lg mt-16 flex p-5 items-center">
        <div className="w-64 h-64 bg-gray-400 rounded-md mr-2">
          <img
            className="w-full h-full"
            src="../assets/images/foto_perfil.jpg"
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
                <MdEmail className='mr-2'/>
                <p>pabloorozco2712@gmail.com</p>
              </div>
              <div className="flex items-center">
                <ImPhone className="mr-2" />
                <p>(+502) 3026 6803</p>
              </div>
            </div>
          </div>
          <p className="mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            numquam perspiciatis enim cumque eligendi sint aut dolorem, vero
            magnam culpa facere quae omnis ab vitae. Voluptate alias commodi
            ipsa consequuntur?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            corrupti temporibus voluptate reiciendis! Culpa, dolorum magnam,
            eaque asperiores repellat sequi placeat dolores, a ipsa
            exercitationem fugiat deleniti illum? Quos, eligendi?
          </p>
        </div>
      </header>
    );
};

export default Header;