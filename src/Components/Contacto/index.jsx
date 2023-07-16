import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { VscGithubAlt } from 'react-icons/vsc';

const Contacto = () => {
    return (
      <div className="bg-white p-5 rounded-lg div_exp mr-9 mt-6">
        <h5 className="font-bold text-xl mb-6">CONTACTO</h5>
        <div className="w-full h-full flex justify-center">
          <ul className="w-3/4 h-3/4 grid grid-cols-2 gap-4 place-content-center p-3">
            {/* correo electronico */}
            <li className="border-solid border-4 border-[#0000FF] text-[#0000FF] rounded-full flex items-center justify-center p-4 hover:bg-[#0000FF] hover:text-white">
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pabloorozco2712@gmail.com"
                target="_blank"
                className="w-full h-full"
              >
                <MdOutlineMail className="w-full h-full" />
              </a>
            </li>
            {/* numero de telefono */}
            <li className="border-solid border-4 border-[#25D366] text-[#25D366] rounded-full flex items-center justify-center p-4 hover:bg-[#25D366] hover:text-white">
              <a
                href="https://wa.me/50230366803"
                target="_blank"
                className="w-full h-full p-1"
              >
                <SiWhatsapp className="w-full h-full" />
              </a>
            </li>
            {/* linkedin */}
            <li className="border-solid border-4 border-[#0077B5] text-[#0077B5] rounded-full flex items-center justify-center p-4 hover:bg-[#0077B5] hover:text-white">
              <a
                href="https://www.linkedin.com/in/pablo-benjamin-orozco-5b663b169/"
                target="_blank"
                className="w-full h-full p-1"
              >
                <AiOutlineLinkedin className="w-full h-full" />
              </a>
            </li>
            {/* github */}
            <li className="border-solid border-4 border-[#181717] text-[#181717] rounded-full flex items-center justify-center p-4 hover:bg-[#181717] hover:text-white">
              <a
                href="https://github.com/PabloOro27"
                target="_blank"
                className="w-full h-full p-1"
              >
                <VscGithubAlt className="w-full h-full" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    ); 
};

export default Contacto;