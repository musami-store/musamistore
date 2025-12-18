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
            "negro":{
                label: "Negro",
                price: 1800,
                images: ["Products/aros-flor-hojas-mantel-1.jpg", "Products/aros-flor-hojas-mantel-2.jpg", "Products/aros-flor-hojas-mantel-3.jpg", "Products/aros-flor-hojas-mantel-4.jpg"]
            },
            "rosado":{
                label: "Rosado - AGOTADO",
                price: 1800,
                images: ["Products/aros-flor-hojas-mantel-2.jpg", "Products/aros-flor-hojas-mantel-1.jpg", "Products/aros-flor-hojas-mantel-3.jpg", "Products/aros-flor-hojas-mantel-4.jpg"]
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
    }
}