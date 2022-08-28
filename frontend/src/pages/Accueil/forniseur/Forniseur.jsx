import React from 'react'
import "./style.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Ddata = [
    {
      id: 1,
      cover: "/assets/forniseur/camab.png",
      name: "Camab"
    },
    {
        id: 2,
        cover: "/assets/forniseur/ersa.png",
        name: "Ersa"
      },    
      {
        id: 3,
        cover: "/assets/forniseur/florian.png",
        name: "Florian"
      },    
      {
        id: 4,
        cover: "/assets/forniseur/radiata.png",
        name: "Radiata"
      },    
      {
        id: 5,
        cover: "/assets/forniseur/vasicos.jpg",
        name: "Vasicos"
      },    
      {
        id: 6,
        cover: "/assets/forniseur/stenvalls.png",
        name: "Stenvalls"
      },    
      {
        id: 7,
        cover: "/assets/forniseur/polkky.jpg",
        name: "Polkky"
      },    
      {
        id: 8,
        cover: "/assets/forniseur/gosta.png",
        name: "Gosta"
      },    
      {
        id: 9,
        cover: "/assets/forniseur/arkopa.png",
        name: "Arkopa"
      },  
      {
        id: 10,
        cover: "/assets/forniseur/camsan.jpg",
        name: "Camsan"
      }, 
      {
        id: 11,
        cover: "/assets/forniseur/kastamonou.png",
        name: "Kastamonu"
      },       
      {
        id: 12,
        cover: "/assets/forniseur/portakal.png",
        name: "Portakal"
      }, 
      {
        id: 13,
        cover: "/assets/forniseur/cema.png",
        name: "Cema"
      },  
      {
        id: 14,
        cover: "/assets/forniseur/more.png",
        name: "More"
      },  
      {
        id: 15,
        cover: "/assets/forniseur/exportdrvo.png",
        name: "ExportDrvo"
      },   
      {
        id: 16,
        cover: "/assets/forniseur/vadelta.png",
        name: "Vadelta"
      }, 
      {
        id: 17,
        cover: "/assets/forniseur/storaenso.png",
        name: "Storaenso"
      },  
      {
        id: 18,
        cover: "/assets/forniseur/tropicabois.jpg",
        name: "TropicaBois"
      },   
      {
        id: 19,
        cover: "/assets/forniseur/finsa.jpg",
        name: "Finsa"
      },
      {
        id: 20,
        cover: "/assets/forniseur/abalon.jpg",
        name: "Abalon"
      },     
      {
        id: 21,
        cover: "/assets/forniseur/asiewood.jpg",
        name: "AsieWood"
      },  
      {
        id: 22,
        cover: "/assets/forniseur/welde.jpg",
        name: "Welde"
      },     
      {
        id: 23,
        cover: "/assets/forniseur/etorki.png",
        name: "Etorki"
      }, 
      {
        id: 24,
        cover: "/assets/forniseur/rainertimber.png",
        name: "RainerTimber"
      },     
      {
        id: 25,
        cover: "/assets/forniseur/yildizenerge.jpg",
        name: "YildizEnerge"
      },                                           
]
const Forniseur = () => {
    const settings1 = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 2
      }
      const settings2 = {
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    
  return (
   <div>

       <div className='fornisseur' data-aos='fade-down'>
         <h2 className="heading" data-aos="zoom-in-down">
              Fornisseurs
          </h2>

    <Slider {...settings1}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='box-fornis' key={index}>
                <div className='img-fornis'>
                  <img src={value.cover} alt='' width='100%' height='200px' />
                </div>
                <h4>{value.name}</h4>
              </div>
            </>
          )
        })}
    </Slider>
  </div>
    <div className='fornisseur1' data-aos='fade-down'>
         <h2 className="heading" data-aos="zoom-in-down">
              Fornisseurs
          </h2>

    <Slider {...settings2}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='box-fornis' key={index}>
                <div className='img-fornis'>
                  <img src={value.cover} alt='' width='100%' height='200px' />
                </div>
                <h4>{value.name}</h4>
              </div>
            </>
          )
        })}
    </Slider>
  </div>
  </div> 

  )
}

export default Forniseur