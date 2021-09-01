const initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600-1-600x600.jpg',
        description: 'Apple',
        price: 500000,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 8 plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/225734/iphone-8-plus-den-600x600-600x600.jpg',
        description: 'Apple',
        price: 700000,
        inventory: 10,
        rating: 3
    },
    {
        id: 3,
        name: 'Iphone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
        description: 'Apple',
        price: 1500000,
        inventory: 10,
        rating: 5
    }
]
const products = (state = initialState, action) =>{
    switch (action.type) {
        default:
            return [...state];
    }
}
export default products;