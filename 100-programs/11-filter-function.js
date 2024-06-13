let products = [
    {name: 'iPhone', price: 50000},
    {name: 'Pixel', price: 15000},
    {name: 'OnePlus', price: 13000},
    {name: 'Mi', price: 7000},
    {name: 'Oppo', price: 10000},
    {name: 'Redmi', price: 13000},
    {name: 'Vivo', price: 8000}
]
products = products.filter( item => item.price<10000);

console.log(products)