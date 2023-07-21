import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { BsGithub } from "react-icons/bs";
import { BsLaptopFill } from "react-icons/bs";
// imagenes
import imagen1 from "../assets/images/imagen1.jpg";
import imagen2 from "../assets/images/imagen2.jpg";
import imagen3 from "../assets/images/imagen3.jpg";
import imagen4 from "../assets/images/imagen4.jpg";

const Proyectos = () => {
  // Arreglo con las rutas de las imágenes que deseas mostrar
  const proyectos = [
    {
      id: 0,
      url: imagen1,
      titulo: "Todo List",
      githubPage: "https://github.com/PabloOro27/ToDo",
      linkPage: "https://pablooro27.github.io/ToDo/",
    },
    {
      id: 1,
      url: imagen2,
      titulo: "Shopify",
      githubPage: "https://github.com/PabloOro27/ShopiSale",
      linkPage: "https://master--strong-scone-2d46d8.netlify.app/",
    },
    {
      id: 2,
      url: imagen3,
      titulo: "Encriptador",
      githubPage: "https://github.com/PabloOro27/encriptador",
      linkPage: "https://pablooro27.github.io/encriptador/public/index.html",
    },
    {
      id: 3,
      url: imagen4,
      titulo: "Pagina de Barberia",
      githubPage: "https://github.com/PabloOro27/Barberia-Alura",
      linkPage: "https://pablooro27.github.io/Barberia-Alura/",
    },
    // Agrega más imágenes aquí según necesites
  ];
  // Configuración del carrusel (opcional, puedes ajustarla según tus necesidades)
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Permite desplazarse infinitamente
    speed: 500, // Velocidad de animación en milisegundos
    slidesToShow: 1, // Número de imágenes que se muestran a la vez
    slidesToScroll: 1, // Número de imágenes que se desplazan al hacer clic en los puntos de navegación
  };

  return (
    <div className="bg-white w-[1046px] h-[425px] my-10 flex flex-col items-center p-4">
      <h4 className="text-xl font-semibold mb-4">Mis Proyectos Recientes</h4>
      {/* ruleta de imagenes */}
      <div className="w-4/6 h-full">
        <Slider {...settings}>
          {proyectos.map((proyecto, index) => (
            <div key={index} className="proyecto">
              <img
                src={proyecto.url}
                alt={`Image ${index + 1}`}
                className="w-full h-80 object-contain rounded-lg"
              />
              <div className="overlay">
                <p>{proyecto.titulo}</p>
                <div className="iconos-contenedor">
                  <a
                    href={proyecto.githubPage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub className="text-black text-6xl m-2" />
                  </a>
                  <a 
                    href={proyecto.linkPage}
                    target="_blank"
                    >
                    <BsLaptopFill className="text-black text-6xl m-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Proyectos;
