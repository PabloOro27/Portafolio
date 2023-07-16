import React from 'react';
import Experiencia from '../Components/experiencia';
import Hobbies from '../Components/Hobbies';
import Contacto from '../Components/Contacto';

const Cuerpo = () => {
    return (
      <div 
        className="mt-16 flex" 
        style={{ width: "1046px" }}
      >
        <Experiencia></Experiencia>
        <Hobbies></Hobbies>
      </div>
    );
};

export default Cuerpo;