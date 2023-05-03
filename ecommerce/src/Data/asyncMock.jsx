const products = [
    {
        id: '1',
        name: 'Café Brasil Crucera 250g:',
        price: 550,
        category: 'Café',
        img:'src/assets/img/BrasilCrucera.webp',
        stock: 10,
        description: 'Notas: Chocolate, azucar moreno. Origen: Brasil',
     
    },
    { 
        id: '2',
        name: 'Café Colombia Ana 250g:',
        price: 950,
        category: 'Café',
        img:'src/assets/img/colombiaana.webp',
        stock: 15,
        description: 'Notas: Vino tinto, cacao, moras.'
    },
    { 
        id: '3',
        name: 'Café Kenia Kiambu 250g:',
        price: 11000,
        category: 'Café',
        img:'src/assets/img/kenia.webp',
        stock: 12,
        description: 'Notas: Damasco, avellanas y vainilla.'
    },
    {
        id: '4',
        name: 'Molinillo Manual Bialetti:',
        price: 2000,
        category: 'Accesorios',
        img:'src/assets/img/Molinillo.webp',
        stock: 11,
        description: 'Fácil de usar, excelente opción para disfrutar de un café recien molido.'   
     },
     {
        id: '5',
        name: 'Jarra Cuello de Cisne:',
        price: 3890,
        category: 'Accesorios',
        img:'src/assets/img/jarracisne.webp',
        stock: 15,
        description: 'Escencial para preparar café con métodos de filtro como la V60.'   
     },
     {
        id: '6',
        name: 'Vaso Térmico Hario:',
        price: 2100,
        category: 'Accesorios',
        img:'src/assets/img/vasohario.webp',
        stock: 19,
        description: 'Ideal para mantener la temperatura de la bebida durante mas tiempo. Frio/calor.'   
     },
     {
        id: '7',
        name: 'Aeropress:',
        price: 2200,
        category: 'Métodos',
        img:'src/assets/img/aeropress.webp',
        stock: 8,
        description: 'Prensa de café portatil y facil de usar'   
     },
     {
        id: '8',
        name: 'Moka Clásica Bialetti:',
        price: 3650,
        category: 'Métodos',
        img:'src/assets/img/mokaitaliana.webp',
        stock: 9,
        description: 'Cafetera italiana icponica, diseñada para preparar cafe espressio de manera fácil y rápida.'   
     },
     {
        id: '9',
        name: 'Set V60:',
        price: 3590,
        category: 'Métodos',
        img:'src/assets/img/v60ceramica.webp',
        stock: 15,
        description: 'Es un kit completo para prepara café de alta calidad.'   
     },
     {
        id: '10',
        name: 'Everyday:',
        price: 690,
        category: 'Membresías',
        img:'src/assets/img/membresia1.jpg',
        stock: 12,
        description: '1 bolsa de 500g por mes'   
     },
     {
        id: '11',
        name: 'Simple',
        price: 900,
        category: 'Membresías',
        img:'src/assets/img/membresia2.webp',
        stock: 6,
        description: '2 bolsas de 250g por mes.'   
     },
     {
        id: '12',
        name: 'Doble shot',
        price: 1700,
        category: 'Membresías',
        img:'src/assets/img/membresia3.webp',
        stock: 19,
        description: '4 bolsas de 250g por mes.'   
     },
];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            setTimeout(() => {
                resolve(products)
            },400)
        })
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 400)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category)
            resolve(filteredProducts)
        }, 400)
    })
}