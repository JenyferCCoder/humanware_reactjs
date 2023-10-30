const products = [
    {
        id: '1',
        name: "Monitor 1",
        price: 1000,
        category:'Monitores',
        img:'https://coolboxpe.vtexassets.com/arquivos/ids/179570-800-auto?v=637484882305900000&width=800&height=auto&aspect=true',
        stock: 25,
        description: 'Descripción del monitor'
    },
    { id: '2', name: "Monitor 2", price: 1000, category:'Monitores', img:'',  stock: 25, description: 'Descripción del monitor 2' },
    { id: '3', name: "Mouse 1", price: 1000, category:'Mouse', img:'',  stock: 25, description: 'Descripción del monuse 1' },
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 300);
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))            
        }, 500)
    })
}

export const getProductByCategory = (ProductsByCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === ProductsByCategory))            
        }, 700)
    })
}
