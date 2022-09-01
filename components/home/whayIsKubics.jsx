import Image from 'next/image';
import React from 'react';
import Collage from '../collage'





const WhayIsKubics = () => {
  return (
    <>
      <div className='grid items-center w-full h-full px-2 sm:px-8 '>
        <div className='p-4 text-justify text-white rounded-lg shadow-xl mb-44 bg-primary'>
          <p className='mb-2'>Kubics es una plataforma dentro del ecosistema Blockchain que nace con el objetivo de financiar total o parcialmente largometrajes cinematográficos ya sean de animación o imagen real.</p>
          <p className='mb-2'>De cada proyecto lanzamos una colección de NFT´s Kubics relacionados con  la película . Estos NFT´S ayudarán  a financiarla o levantarla financieramente, ya sea en una o en otra de sus fases : Desarrollo / preproducciòn , Producción o Postproducciòn</p>
          {/* <div className="contenedor">
            <div className="cubo">
              <div className="flex items-center justify-center cara ">
                <img className='object-cover' src="/animals/Ardilla_01.png" title="Soto y Caldevilla de Valdeón" alt="Soto y Caldevilla de Valdeón" height="290px" width="290px"></img>
              </div>
              <div className="flex items-center justify-center cara ">
                <img className='object-cover' src="/animals/Cangrejo_02.png" title="Un poco de nieve en agosto" alt="Un poco de nieve en agosto" width="290px" height="290px"></img>
              </div>
              <div className="flex items-center justify-center cara ">
                <img className='object-cover' src="./animals/Ardilla_01.png" title="Un rebeco" alt="Un rebeco" width="290px" height="290px"></img>
              </div>
              <div className="flex items-center justify-center cara ">
                <img className='object-cover' src="/animals/Ardilla_01.png" title="Posada de Valdeón" alt="Posada de Valdeón" width="290px" height="290px"></img>
              </div>
              <div className="flex items-center justify-center cara ">
                <img className='object-cover' src="/animals/Ardilla_01.png" title="Refugio de Pantivalles" alt="Refugio de Pantivalles" width="290px" height="290px"></img>
              </div>
              <div className="flex items-center justify-center cara ">
                <img className='object-cover' src="/animals/Ardilla_01.png" title="Unas montañas" alt="Unas montañas" width="290px" height="290px"></img>
              </div>
              <div className="cara-fondo"></div>
              <div className="cara-fondo"></div>
              <div className="cara-fondo"></div>
              <div className="cara-fondo"></div>
              <div className="cara-fondo"></div>
              <div className="cara-fondo"></div>
              <div className="cara-fondo"></div>
              <div className="cara-fondo"></div>
            </div>
          </div> */}
          {/* COLLAGUE DE FOTOS */}
          <Collage/>

          <p className='mb-2'>Los NFT´s abrirán las puertas a los holders para introducirse en el mundo del cine con material inédito, les permitirà el acceso a los estudios, la participaciòn en los proyectos de ficción actuando como extras, asì como entradas de cine, encuentros con los y las  artistas, pases para premieres, etc.</p>
          <p className='mb-2'>Kubics ofece la posibilidad de estar más cerca del mundo del cine  participando en una gran producción, siguiendo el proceso de creación y producción de la película en cuestiòn y  vièndola  crecer hasta llegar al éxito.</p>
          <p className='mb-2'>La propuesta  de Kubics es además  proteger y curar estos proyectos  y  garantizar a nuestros holders que estas películas lleguen al público.</p>
          <p className='mb-2'>Una película no es el trabajo de una ùnica persona, no sólo se trata de tener dinero y hacerla, es un trabajo en equipo que parte desde el guión y continùa con  la dirección, las productoras, Agentes de ventas, distribuidoras y exibidoras, todos estos equipos  trabajan para dar forma a un proyecto que se pueda colocar en el mercado, unas veces con más éxito otras con meno. Lo que está claro es que sin estos elementos una película fácilmente puede terminar en un cajón sin poderse distribuir y por tanto sin llegar al público. Es todo un engranaje. Desde Kubics lo que conseguiremos es garantizar que todo este engranaje funcione.</p>
          <p className='mb-2'>Por ello los proyectos que presentamos en nuestra plataforma deben tener estos elementos y sobretodo el interés de una distribuidora hacia el proyecto en cuestión, lo que va hacer que entre todos y todas  podamos darle un valor a los NFT´s de nuestros holders cuando esta película llegue al público.</p>
          <p className='mb-2'>Cuánto valdría ahora el NFT de la primera película de Pixar, o de una película de Tarantino, Godard o Almodóvar?</p>
          <p className='mb-2'>Los NFT de Kubics no son sólo una imágen, son parte de una producción de cine.</p>
          El mundo está cambiando y el ecosistema blockchain abre las puertas a una forma nueva de financiar proyectos, aplicaciones, videojuegos, multiversos y en este caso incluso cine.
          <p className='mb-2'>Todos consumimos cine, ya sea en las salas o el las pantallas de nuestras casas, pero hasta ahora era muy complicado formar parte de ese mundo. Con los NFT de cada película el holder pasa a formar parte de un universo nuevo dentro de la blockchain y del mundo físico.</p>
          <p className='mb-2'>Muchos de las personas que coleccionan NFT´s entienden su valor como piezas únicas de una colección, piezas que por diferentes razones nos cautivan y deseamos poseerlas. Cada vez más el valor de estos NFT va más allá de la imágen en si misma,realmente  es lo que hay detrás lo que le da su valor.  En este caso  detrás de cada NFT  hay un proyecto consolidado lo cual aumenta la posibilidad de que se revalorice tras el éxito de la película.</p>
        </div>
      </div>
    </>
  );
}

export default WhayIsKubics;
