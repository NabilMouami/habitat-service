const data = [
   {
    id:1,
    title: "Nos-Produits",
    icon: "fas fa-caret-right",
    path: "/produits",
    childrens:[
        {
            id:1,
            title:"bois-blanc",
            childrens:[
                {
                    id:1,
                    title: "MADRIERS",
                    path: "/produits/BOIS-BLANC/1",
                    data: {
                    
                        id: 4,
                        image: "/assets/madrier.jpg",
                        desc: "Habitat dispose d’un stock important de bois exotique appelé également sapin ou épicéa, importé de Suède et Finlande. C’est une essence légère et résistante, utilisée pour la menuiserie intérieure et extérieure, la fabrication de charpentes, de cadres, de portes et fenêtres ainsi que pour le coffrage.",
                        essences: "Épicéa",
                        utilisations:
                          "Menuiserie intérieure & extérieure, cadres de portes/fenêtres, lamellés-collés, tourets, emballages, palettes, agencement, construction de maison à ossature bois etc.",
                        DENSITÉ: "440 kg/m3 (lorsque sec à 12%)",
                        ÉLASTICITÉ: "11 000 Mpa",
                        PROVENANCES: "Slovenie,Turkie,Brazil,Austrian",
                        RÉSISTANCE:
                          "Flexion : 75 Mpa Traction : 90 Mpa Compression : 40 Mpa",
                        size: "500",
                        long: "10-12-12-15-16m",
                        forniteur: "20cm",
                        epaisseur: "20-25-40-45-47-50",
                        larg: "2m-2.5-3-3.5-4m",
                      },
                  
                },
                  {
                    id:2,
                    title: "Pin",
                    path: "/produits/BOIS-BLANC/1",
                    data: {
                      id: 4,
                      image: "/assets/pin.jpg",
                      desc: "Habitat dispose d’un stock important de bois exotique appelé également sapin ou épicéa, importé de Suède et Finlande. C’est une essence légère et résistante, utilisée pour la menuiserie intérieure et extérieure, la fabrication de charpentes, de cadres, de portes et fenêtres ainsi que pour le coffrage.",
                      essences: "Épicéa",
                      utilisations:
                        "Menuiserie intérieure & extérieure, cadres de portes/fenêtres, lamellés-collés, tourets, emballages, palettes, agencement, construction de maison à ossature bois etc.",
                      DENSITÉ: "440 kg/m3 (lorsque sec à 12%)",
                      ÉLASTICITÉ: "11 000 Mpa",
                      PROVENANCES: "Slovenie,Turkie,Brazil,Austrian",
                      RÉSISTANCE:
                        "Flexion : 75 Mpa Traction : 90 Mpa Compression : 40 Mpa",
                      size: "500",
                      long: "10-12-12-15-16m",
                      forniteur: "20cm",
                      epaisseur: "3cm-->4cm",
                      larg: "2m-2.5-3-3.5-4m",
                    },
                  },
        
            ]
        }
    ]
   },
   {
    id:2,
    title: 'Contact',
    path: "/contact"
   },
   {
    id:3,
    title: 'Aceuil',
    path: "/"
   },
   {
    id:4,
    title:"Actualites",
    path: "/actualites"
   }



];
export default data;