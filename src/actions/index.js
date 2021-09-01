import * as types from '../constants/ActionType';

export const addToCart = (product, quantity) =>{
    return{
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const delCart = (product) =>{
    return{
        type: types.DELETE_CART,
        product,
    }
}
export const updateCart = (product,quantity) =>{
    return{
        type: types.UPDATE_CART,
        product,
        quantity
    }
}
export const changeMessage = (message) =>{
    return{
        type: types.CHANGE_MESSAGE,
        message
    }
}

