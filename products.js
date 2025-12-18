const PRODUCTS = {
    "collar-diseño-corazon": {
        title: 'Collar con diseño de corazón',
        price: 774,
        images: ["Products/Collar con diseño de corazón.png"]
    },
    "collar-cadena-clavicula-sol": {
        title: 'Collar de cadena de clavícula con sol',
        price: 1424,
        images: ["Products/Collar de cadena de clavícula con sol.png"]
    },
    "collar-estilo-bohemio-multicolor": {
        title: 'Collar de estilo bohemio multicolor',
        price: 1549,
        images: ["Products/Collar de estilo bohemio multicolor.png"]
    },
    "pendientes-con-estrella": {
        title: 'Pendientes con estrella',
        price: 1099,
        images: ["Products/Pendientes con estrella.png"]
    },
    "aros-argolla-punta-gruesa":{
        title: 'Aros',
        variants: {
            "plateado": {
                label: "Plateado",
                price: 1500,
                images: ["Products/aros-argolla-punta-gruesa-1.jpg", "Products/aros-argolla-punta-gruesa-2.jpg", "Products/aros-argolla-punta-gruesa-3.jpg"],
            },
            "dorado": {
                label: "Dorado - AGOTADO",
                price: 1500,
                images: ["Products/aros-argolla-punta-gruesa-3.jpg", "Products/aros-argolla-punta-gruesa-1.jpg", "Products/aros-argolla-punta-gruesa-2.jpg"],
            }
        }
    },
    "aros-colgante-circulo-cadena":{
        title: 'Aros',
        variants: {
            "plateado": {
                label: "Plateado",
                price: 1500,
                images: ["Products/aros-colgante-circulo-cadena-2.jpg", "Products/aros-colgante-circulo-cadena-1.jpg", "Products/aros-colgante-circulo-cadena-3.jpg", "Products/aros-colgante-circulo-cadena-4.jpg"],
            },
            "dorado": {
                label: "Dorado - AGOTADO",
                price: 1500,
                images: ["Products/aros-colgante-circulo-cadena-1.jpg", "Products/aros-colgante-circulo-cadena-2.jpg", "Products/aros-colgante-circulo-cadena-3.jpg", "Products/aros-colgante-circulo-cadena-4.jpg"],
            }
        }
    },
    "aros-argolla-circulo-corazon":{
        title: 'Argollas',
        variants: {
            "dorado": {
                label: "Dorado",
                price: 1500,
                images: ["Products/aros-argolla-circulo-corazon-2.jpg", "Products/aros-argolla-circulo-corazon-1.jpg", "Products/aros-argolla-circulo-corazon-3.jpg", "Products/aros-argolla-circulo-corazon-4.jpg"],
            },
            "plateado": {
                label: "Plateado - AGOTADO",
                price: 1500,
                images: ["Products/aros-argolla-circulo-corazon-1.jpg", "Products/aros-argolla-circulo-corazon-2.jpg", "Products/aros-argolla-circulo-corazon-3.jpg", "Products/aros-argolla-circulo-corazon-4.jpg"],
            },
        }
    },
    "aros-limon":{
        title: 'Aros',
        variants: {
            "rosado":{
                label: "Rosado",
                price: 2000,
                images: ["Products/aros-limon-1.jpg", "Products/aros-limon-2.jpg"]
            },
            "amarillo":{
                label: "Amarillo - AGOTADO",
                price: 2000,
                images: ["Products/aros-limon-1.jpg", "Products/aros-limon-3.jpg"]
            }
        }
    },
    "aros-estrella-perlas":{
        title: 'Aros',
        price: 1600,
        images: ["Products/aros-estrella-perlas-1.jpg", "Products/aros-estrella-perlas-2.jpg", "Products/aros-estrella-perlas-3.jpg"]
    },
    "argollas-plateada-espiral":{
        title: 'Argollas',
        price: 1500,
        images: ["Products/argollas-plateada-espiral-1.jpg", "Products/argollas-plateada-espiral-2.jpg", "Products/argollas-plateada-espiral-3.jpg"]
    },
    "aros-gota-naranja-rombo":{
        title: 'Aros',
        price: 1800,
        images: ["Products/aros-gota-naranja-rombo-1.jpg", "Products/aros-gota-naranja-rombo-2.jpg", "Products/aros-gota-naranja-rombo-3.jpg", "Products/aros-gota-naranja-rombo-4.jpg"]  
    },
    "aros-flor-hojas-mantel":{
        title: 'Aros',
        variants: {
            "rosado":{
                label: "Rosado",
                price: 1800,
                images: ["Products/aros-flor-hojas-mantel-2.jpg", "Products/aros-flor-hojas-mantel-1.jpg", "Products/aros-flor-hojas-mantel-3.jpg", "Products/aros-flor-hojas-mantel-4.jpg"]
            },
            "negro":{
                label: "Negro - AGOTADO",
                price: 1800,
                images: ["Products/aros-flor-hojas-mantel-1.jpg", "Products/aros-flor-hojas-mantel-2.jpg", "Products/aros-flor-hojas-mantel-3.jpg", "Products/aros-flor-hojas-mantel-4.jpg"]
            }
        }
    },
    "argollas-normal-v1":{
        title: 'Argollas',
        variants: {
            "dorado":{
                label: "Dorado",
                price: 1000,
                images: ["Products/argollas-normal-v1-1.jpg", "Products/argollas-normal-v1-2.jpg", "Products/argollas-normal-v1-3.jpg", "Products/argollas-normal-v1-4.jpg"]
            },
            "plateado":{
                label: "Plateado - AGOTADO",
                price: 1000,
                images: ["Products/argollas-normal-v1-1.jpg", "Products/argollas-normal-v1-3.jpg", "Products/argollas-normal-v1-2.jpg", "Products/argollas-normal-v1-4.jpg"]
            },
        }
    },
    "argollas-espiral-cadena":{
        title: 'Argollas',
        variants: {
            "dorado-grande":{
                label: "Dorado - 5cm diametro",
                price: 1200,
                images: ["Products/argollas-espiral-cadena-1.jpg", "Products/argollas-espiral-cadena-4.jpg", "Products/argollas-espiral-cadena-3.jpg", "Products/argollas-espiral-cadena-2.jpg"]
            },
            "dorado-mediano":{
                label: "Dorado - 4cm diametro",
                price: 1000,
                images: ["Products/argollas-espiral-cadena-3.jpg", "Products/argollas-espiral-cadena-4.jpg", "Products/argollas-espiral-cadena-1.jpg", "Products/argollas-espiral-cadena-2.jpg"]
            },
            "plateado":{
                label: "Plateado - 4cm diametro - AGOTADO",
                price: 1000,
                images: ["Products/argollas-espiral-cadena-2.jpg", "Products/argollas-espiral-cadena-1.jpg", "Products/argollas-espiral-cadena-3.jpg", "Products/argollas-espiral-cadena-4.jpg"]
            },
        }
    },
    "argollas-espiral-v1":{
        title: 'Argollas',
        variants: {
            "dorado":{
                label: "Dorado",
                price: 1200,
                images: ["Products/argollas-espiral-v1-1.jpg", "Products/argollas-espiral-v1-4.jpg", "Products/argollas-espiral-v1-5.jpg", "Products/argollas-espiral-v1-6.jpg", "Products/argollas-espiral-cadena-2.jpg", "Products/argollas-espiral-cadena-3.jpg"]
            },
            "plateado":{
                label: "Plateado - AGOTADO",
                price: 1200,
                images: ["Products/argollas-espiral-v1-1.jpg", "Products/argollas-espiral-v1-2.jpg", "Products/argollas-espiral-v1-3.jpg", "Products/argollas-espiral-v1-4.jpg", "Products/argollas-espiral-cadena-5.jpg", "Products/argollas-espiral-cadena-6.jpg"]
            },
        }
    },
    "argollas-perlas":{
        title: 'Argollas',
        variants: {
            "dorado":{
                label: "Dorado",
                price: 1400,
                images: ["Products/argollas-perlas-1.jpg", "Products/argollas-perlas-3.jpg", "Products/argollas-perlas-2.jpg", "Products/argollas-perlas-4.jpg"]
            },
            "plateado":{
                label: "Plateado - AGOTADO",
                price: 1400,
                images: ["Products/argollas-perlas-1.jpg", "Products/argollas-perlas-2.jpg", "Products/argollas-perlas-3.jpg", "Products/argollas-perlas-4.jpg"]
            },
        }  
    },
    "argollas-corazones":{
        title: 'Argollas',
        price: 1000,
        images: ["Products/argollas-corazones-1.jpg", "Products/argollas-corazones-2.jpg", "Products/argollas-corazones-3.jpg", "Products/argollas-corazones-4.jpg"]
    },
    "argollas-perlas-pequeñas":{
        title: 'Argollas',
        variants: {
            "dorado":{
                label: "Dorado",
                price: 1200,
                images: [
                    "Products/argollas-perlas-pequeñas-1.jpg", "Products/argollas-perlas-pequeñas-2.jpg",
                    "Products/argollas-perlas-pequeñas-3.jpg", "Products/argollas-perlas-pequeñas-4.jpg",
                    "Products/argollas-perlas-pequeñas-5.jpg", "Products/argollas-perlas-pequeñas-6.jpg",
                    "Products/argollas-perlas-pequeñas-7.jpg", "Products/argollas-perlas-pequeñas-8.jpg",
                    "Products/argollas-perlas-pequeñas-9.jpg", "Products/argollas-perlas-pequeñas-10.jpg"
                ]
            },
            "plateado":{
                label: "Plateado - AGOTADO",
                price: 1200,
                images: [
                    "Products/argollas-perlas-pequeñas-1.jpg", "Products/argollas-perlas-pequeñas-2.jpg",
                    "Products/argollas-perlas-pequeñas-3.jpg", "Products/argollas-perlas-pequeñas-4.jpg",
                    "Products/argollas-perlas-pequeñas-5.jpg", "Products/argollas-perlas-pequeñas-6.jpg",
                    "Products/argollas-perlas-pequeñas-7.jpg", "Products/argollas-perlas-pequeñas-8.jpg",
                    "Products/argollas-perlas-pequeñas-9.jpg", "Products/argollas-perlas-pequeñas-10.jpg"
                ]
            },
        }  
    },
    "argollas-diamante-corazon":{
        title: 'Argollas',
        price: 1500,
        images: [
            "Products/argollas-diamante-corazon-1.jpg", "Products/argollas-diamante-corazon-2.jpg", 
            "Products/argollas-diamante-corazon-3.jpg", "Products/argollas-diamante-corazon-4.jpg", "Products/argollas-diamante-corazon-5.jpg"
        ]
    },
    "argollas-espiral-grande":{
        title: 'Argollas',
        variants: {
            "dorado":{
                label: "Dorado",
                price: 800,
                images: [
                    "Products/argollas-espiral-grande-1.jpg", "Products/argollas-espiral-grande-2.jpg",
                    "Products/argollas-espiral-grande-3.jpg", "Products/argollas-espiral-grande-4.jpg",
                    "Products/argollas-espiral-grande-5.jpg", "Products/argollas-espiral-grande-6.jpg"
                ]
            },
            "plateado":{
                label: "Plateado",
                price: 800,
                images: [
                    "Products/argollas-espiral-grande-1.jpg", "Products/argollas-espiral-grande-3.jpg",
                    "Products/argollas-espiral-grande-2.jpg", "Products/argollas-espiral-grande-4.jpg",
                    "Products/argollas-espiral-grande-5.jpg", "Products/argollas-espiral-grande-6.jpg"
                ]
            },
        }  
    },
    "argollas-trenza-dorado":{
        title: 'Argollas',
        price: 1000,
        images: [
            "Products/argollas-trenza-dorado-1.jpg", "Products/argollas-trenza-dorado-2.jpg",
            "Products/argollas-trenza-dorado-3.jpg", "Products/argollas-trenza-dorado-4.jpg",
            "Products/argollas-trenza-dorado-5.jpg"
        ]
    },
    "aros-lana": {
        title: 'Aros',
        variants: {
            "rosado":{
                label: "Rosado",
                price: 1500,
                images: [
                    "Products/aros-lana-1.jpg", "Products/aros-lana-2.jpg",
                    "Products/aros-lana-3.jpg", "Products/aros-lana-4.jpg"
                ]
            },
            "negro":{
                label: "Negro",
                price: 1500,
                images: [
                    "Products/aros-lana-2.jpg", "Products/aros-lana-1.jpg",
                    "Products/aros-lana-3.jpg", "Products/aros-lana-4.jpg"
                ]
            },
            "amarillo":{
                label: "Amarillo",
                price: 1500,
                images: [
                    "Products/aros-lana-3.jpg", "Products/aros-lana-2.jpg",
                    "Products/aros-lana-1.jpg", "Products/aros-lana-4.jpg"
                ]
            },
            "Rojo":{
                label: "Rojo",
                price: 1500,
                images: [
                    "Products/aros-lana-4.jpg", "Products/aros-lana-2.jpg",
                    "Products/aros-lana-1.jpg", "Products/aros-lana-4.jpg"
                ]
            },
        }
    },
    "aros-lana-fila": {
        title: 'Aros',
        variants: {
            "rosado":{
                label: "Rosado",
                price: 1500,
                images: [
                    "Products/aros-lana-fila-1.jpg", "Products/aros-lana-fila-2.jpg",
                    "Products/aros-lana-fila-3.jpg", "Products/aros-lana-fila-4.jpg",
                    "Products/aros-lana-fila-5.jpg"
                ]
            },
            "amarillo":{
                label: "Amarillo",
                price: 1500,
                images: [
                    "Products/aros-lana-fila-1.jpg", "Products/aros-lana-fila-3.jpg",
                    "Products/aros-lana-fila-2.jpg", "Products/aros-lana-fila-4.jpg",
                    "Products/aros-lana-fila-5.jpg"
                ]
            },
            "blanco-crema":{
                label: "Blanco Crema",
                price: 1500,
                images: [
                    "Products/aros-lana-fila-1.jpg", "Products/aros-lana-fila-5.jpg",
                    "Products/aros-lana-fila-3.jpg", "Products/aros-lana-fila-4.jpg",
                    "Products/aros-lana-fila-2.jpg"
                ]
            },
            "blanco":{
                label: "Blanco",
                price: 1500,
                images: [
                    "Products/aros-lana-fila-1.jpg", "Products/aros-lana-fila-4.jpg",
                    "Products/aros-lana-fila-3.jpg", "Products/aros-lana-fila-2.jpg",
                    "Products/aros-lana-fila-5.jpg"
                ]
            },
        }
    },
    "aros-circulo-lana": {
        title: 'Aros',
        variants: {
            "colores":{
                label: "Diseño Colores",
                price: 1200,
                images: [
                    "Products/aros-circulo-lana-1.jpg", "Products/aros-circulo-lana-2.jpg",
                    "Products/aros-circulo-lana-3.jpg", "Products/aros-circulo-lana-4.jpg"
                ]
            },
            "azul":{
                label: "Azul - AGOTADO",
                price: 1200,
                images: [
                    "Products/aros-circulo-lana-1.jpg", "Products/aros-circulo-lana-3.jpg",
                    "Products/aros-circulo-lana-2.jpg", "Products/aros-circulo-lana-4.jpg"
                ]
            },
            "negro":{
                label: "Negro - AGOTADO",
                price: 1200,
                images: [
                    "Products/aros-circulo-lana-1.jpg", "Products/aros-circulo-lana-4.jpg",
                    "Products/aros-circulo-lana-3.jpg", "Products/aros-circulo-lana-2.jpg"
                ]
            }
        }
    },
    "aros-circulo-lana-v4":{
        title: 'Aros',
        price: 1200,
        images: ["Products/aros-circulo-lana-v4.jpg"]
    },
    "aros-lana-azul":{
        title: 'Aros',
        price: 1500,
        images: ["Products/aros-lana-azul.jpg"]
    },
    "aros-plastico-colores":{
        title: 'Aros',
        variants:{
            "diseño-2": {
                label:"Diseño 2",
                price: 1300,
                images: [
                    "Products/aros-plastico-colores-all.jpg", "Products/aros-plastico-colores-1.jpg",
                    "Products/aros-plastico-colores-2.jpg", "Products/aros-plastico-colores-3.jpg",
                    "Products/aros-plastico-colores-4.jpg", "Products/aros-plastico-colores-5.jpg",
                    "Products/aros-plastico-colores-6.jpg", "Products/aros-plastico-colores-all2.jpg"
                ]
            },
            "diseño-3": {
                label:"Diseño 3",
                price: 1300,
                images: [
                    "Products/aros-plastico-colores-all.jpg", "Products/aros-plastico-colores-1.jpg",
                    "Products/aros-plastico-colores-2.jpg", "Products/aros-plastico-colores-3.jpg",
                    "Products/aros-plastico-colores-4.jpg", "Products/aros-plastico-colores-5.jpg",
                    "Products/aros-plastico-colores-6.jpg", "Products/aros-plastico-colores-all2.jpg"
                ]
            },
            "diseño-1": {
                label:"Diseño 1 - AGOTADO",
                price: 1300,
                images: [
                    "Products/aros-plastico-colores-all.jpg", "Products/aros-plastico-colores-1.jpg",
                    "Products/aros-plastico-colores-2.jpg", "Products/aros-plastico-colores-3.jpg",
                    "Products/aros-plastico-colores-4.jpg", "Products/aros-plastico-colores-5.jpg",
                    "Products/aros-plastico-colores-6.jpg", "Products/aros-plastico-colores-all2.jpg"
                ]
            },
            "diseño-4": {
                label:"Diseño 4 - AGOTADO",
                price: 1300,
                images: [
                    "Products/aros-plastico-colores-all.jpg", "Products/aros-plastico-colores-1.jpg",
                    "Products/aros-plastico-colores-2.jpg", "Products/aros-plastico-colores-3.jpg",
                    "Products/aros-plastico-colores-4.jpg", "Products/aros-plastico-colores-5.jpg",
                    "Products/aros-plastico-colores-6.jpg", "Products/aros-plastico-colores-all2.jpg"
                ]
            },
            "diseño-5": {
                label:"Diseño 5 - AGOTADO",
                price: 1300,
                images: [
                    "Products/aros-plastico-colores-all.jpg", "Products/aros-plastico-colores-1.jpg",
                    "Products/aros-plastico-colores-2.jpg", "Products/aros-plastico-colores-3.jpg",
                    "Products/aros-plastico-colores-4.jpg", "Products/aros-plastico-colores-5.jpg",
                    "Products/aros-plastico-colores-6.jpg", "Products/aros-plastico-colores-all2.jpg"
                ]
            }
        }
    },
    "aros-diamante-marmol":{
        title: 'Aros',
        variants: {
            "diseño-1":{
                label: "Diseño 1",
                price: 1500,
                images: [
                    "Products/aros-diamante-marmol-1.jpg", "Products/aros-diamante-marmol-2.jpg"
                ]
            },
            "diseño-2":{
                label: "Diseño 2 - AGOTADO",
                price: 1500,
                images: [
                    "Products/aros-diamante-marmol-2.jpg", "Products/aros-diamante-marmol-1.jpg"
                ]
            }
        }
    },
    "aros-plastico-blanco":{
        title: 'Aros',
        price: 1300,
        images: ["Products/aros-plastico-blanco-1.jpg", "Products/aros-plastico-blanco-2.jpg"]
    },
    "aros-limon-v2": {
        title: 'Aros',
        price: 1500,
        images: [
            "Products/aros-limon-v2-1.jpg", "Products/aros-limon-v2-2.jpg", "Products/aros-limon-v2-3.jpg"
        ]
    },
    "aros-animal-print-leopardo":{
        title: 'Aros',
        price: 1800,
        images:["Products/aros-animal-print-leopardo-1.jpg", "Products/aros-animal-print-leopardo-2.jpg"]
    },
    "aros-plastico-morado":{
        title: 'Argollas',
        price: 1500,
        images: [
            "Products/aros-plastico-morado-1.jpg", "Products/aros-plastico-morado-2.jpg",
            "Products/aros-plastico-morado-3.jpg", "Products/aros-plastico-morado-4.jpg",
            "Products/aros-plastico-morado-5.jpg", "Products/aros-plastico-morado-6.jpg"
        ]
    },
    "argollas-plastico-verde-rosa":{
        title: 'Argollas',
        variants:{
            "rosado":{
                label: "Rosado",
                price: 1500,
                images: [
                    "Products/argollas-plastico-verde-rosa-1.jpg", "Products/argollas-plastico-verde-rosa-2.jpg",
                    "Products/argollas-plastico-verde-rosa-3.jpg", "Products/argollas-plastico-verde-rosa-4.jpg",
                    "Products/argollas-plastico-verde-rosa-5.jpg", "Products/argollas-plastico-verde-rosa-6.jpg",
                    "Products/argollas-plastico-verde-rosa-7.jpg", "Products/argollas-plastico-verde-rosa-8.jpg",
                    "Products/argollas-plastico-verde-rosa-9.jpg"
                ]
            },
            "verde":{
                label: "Verde",
                price: 1500,
                images: [
                    "Products/argollas-plastico-verde-rosa-1.jpg", "Products/argollas-plastico-verde-rosa-5.jpg",
                    "Products/argollas-plastico-verde-rosa-6.jpg", "Products/argollas-plastico-verde-rosa-7.jpg",
                    "Products/argollas-plastico-verde-rosa-2.jpg", "Products/argollas-plastico-verde-rosa-3.jpg",
                    "Products/argollas-plastico-verde-rosa-4.jpg", "Products/argollas-plastico-verde-rosa-8.jpg",
                    "Products/argollas-plastico-verde-rosa-9.jpg"
                ]
            }
        }
    },
    "aros-verde-grueso": {
        title: 'Aros',
        price: 1300,
        images: [
            "Products/aros-verde-grueso-1.jpg", "Products/aros-verde-grueso-2.jpg",
            "Products/aros-verde-grueso-3.jpg", "Products/aros-verde-grueso-4.jpg",
            "Products/aros-verde-grueso-5.jpg", "Products/aros-verde-grueso-6.jpg",
            "Products/aros-verde-grueso-7.jpg"
        ]
    },
    "aros-plastico-tonos-rosa": {
        title: 'Aros',
        variants: {
            "diseño-1":{
                label: "Diseño 1",
                price: 1300,
                images: ["Products/aros-plastico-tonos-rosa-1.jpg", "Products/aros-plastico-tonos-rosa-2.jpg"]
            },
            "diseño-2":{
                label: "Diseño 2",
                price: 1300,
                images: ["Products/aros-plastico-tonos-rosa-1.jpg", "Products/aros-plastico-tonos-rosa-2.jpg"]
            },
            "diseño-3":{
                label: "Diseño 3",
                price: 1300,
                images: ["Products/aros-plastico-tonos-rosa-1.jpg", "Products/aros-plastico-tonos-rosa-2.jpg"]
            },
            "diseño-5":{
                label: "Diseño 5",
                price: 1300,
                images: ["Products/aros-plastico-tonos-rosa-1.jpg", "Products/aros-plastico-tonos-rosa-2.jpg"]
            },
            "diseño-4":{
                label: "Diseño 4 - AGOTADO",
                price: 1300,
                images: ["Products/aros-plastico-tonos-rosa-1.jpg", "Products/aros-plastico-tonos-rosa-2.jpg"]
            },
        }
    },
    "aros-plastico-tonos-cafe": {
        title: 'Aros',
        variants: {
            "diseño-1":{
                label: "Diseño 1",
                price: 1300,
                images: ["Products/aros-plastico-tonos-cafe-1.jpg", "Products/aros-plastico-tonos-cafe-2.jpg"]
            },
            "diseño-2":{
                label: "Diseño 2",
                price: 1300,
                images: ["Products/aros-plastico-tonos-cafe-1.jpg", "Products/aros-plastico-tonos-cafe-2.jpg"]
            },
            "diseño-3":{
                label: "Diseño 3",
                price: 1300,
                images: ["Products/aros-plastico-tonos-cafe-1.jpg", "Products/aros-plastico-tonos-cafe-2.jpg"]
            },
            "diseño-5":{
                label: "Diseño 5",
                price: 1300,
                images: ["Products/aros-plastico-tonos-cafe-1.jpg", "Products/aros-plastico-tonos-cafe-2.jpg"]
            },
            "diseño-4":{
                label: "Diseño 4 - AGOTADO",
                price: 1300,
                images: ["Products/aros-plastico-tonos-cafe-1.jpg", "Products/aros-plastico-tonos-cafe-2.jpg"]
            },
        }
    },
    "argollas-corazon-colores": {
        title: 'Argollas',
        variants: {
            "rosado":{
                label: "Rosado",
                price: 1500,
                images: ["Products/argollas-corazon-colores-1.jpg", "Products/argollas-corazon-colores-2.jpg"]
            },
            "verde":{
                label: "Verde",
                price: 1500,
                images: ["Products/argollas-corazon-colores-1.jpg", "Products/argollas-corazon-colores-2.jpg"]
            },
            "amarillo":{
                label: "Amarillo",
                price: 1500,
                images: ["Products/argollas-corazon-colores-1.jpg", "Products/argollas-corazon-colores-2.jpg"]
            },
            "azul":{
                label: "Azul",
                price: 1500,
                images: ["Products/argollas-corazon-colores-1.jpg", "Products/argollas-corazon-colores-2.jpg"]
            },
            "morado":{
                label: "Morado - AGOTADO",
                price: 1500,
                images: ["Products/argollas-corazon-colores-1.jpg", "Products/argollas-corazon-colores-2.jpg"]
            },
        }
    }
}