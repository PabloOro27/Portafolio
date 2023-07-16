import React from "react";

const Hobbies = () => {
  return (
    <div
      className=" bg-white rounded-lg p-6"
      style={{ height: "1000px", width: "600px" }}
    >
      <h4 className="text-2xl font-medium mb-6">HOBBIES</h4>
      {/* cuerpo */}
      <div className="w-full h-full flex flex-col items-center">
        {/* games */}
        <div className="w-full h-52">
          <figure className="w-full h-4/5">
            <img
              className="w-full h-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Gaming"
            />
          </figure>
          <h5 className="text-xl font-semibold">Video Games</h5>
          <h6 className="text-lg font-light">
            Me encanta sumergirme en mundos virtuales, explorar nuevas aventuras
            y desafiar mis habilidades estratégicass
          </h6>
        </div>
        {/* cubos */}
        <div className="w-full h-52 mt-16">
          <figure className="w-full h-4/5">
            <img
              className="w-full h-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/1002693/pexels-photo-1002693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="cubo rubik"
            />
          </figure>
          <h5 className="text-xl font-semibold">Cubos Rubik</h5>
          <h6 className="text-lg font-light">
            Me fascina el desafío mental que representa resolver este
            rompecabezas tridimensional.Me emociona enfrentar nuevos retos y
            buscar soluciones para completar el cubo de forma rápida y
            eficiente.
          </h6>
        </div>
        {/* musica */}
        <div className="w-full h-52 mt-24">
          <figure className="w-full h-4/5">
            <img
              className="w-full h-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/1656066/pexels-photo-1656066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="guitarra"
            />
          </figure>
          <h5 className="text-xl font-semibold">Musica</h5>
          <h6 className="text-lg font-light">
            tocar la guitarra es una de mis grandes pasiones. La música tiene un
            poder único para expresar emociones y transmitir mensajes.Disfruto
            aprendiendo nuevas canciones, perfeccionando técnicas y compartiendo
            mi música con amigos y seres queridos.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
