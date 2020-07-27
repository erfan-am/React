import * as actiontypes from '../actionTypes'

export const AddCart=carts=>({
    type:actiontypes.ADD_CART,
    payload:carts
})

export const toggleButton=()=>({
    type:actiontypes.TOGGLE_BUTTON
})


export const toggleButtonClosr=()=>({
    type:actiontypes.TOGGLE_BUTTON_CLOSE
})


export const removeButton=(cart)=>({
    type:actiontypes.REMOVE_BUTTON,
    payload:cart
})

export const describe=()=>({
    type:actiontypes.DESCRIBE
})


export const describeClose=()=>({
    type:actiontypes.DESCRIBE_CLOSE
})