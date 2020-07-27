import * as actiontypes from '../actionTypes'
import {additemToCart,removeCart} from './Add-utils'
import { describe } from './Add-action'
const ININTIAL={
    carts:[],
    display:false,
    describe:false
   
}
const  AddReducer=(state=ININTIAL,action)=>{
switch (action.type) {
    case actiontypes.ADD_CART:
        return{
            ...state,
            carts:additemToCart(state.carts,action.payload)
        }
    case actiontypes.TOGGLE_BUTTON:
        return {
            ...state,
            display:!state.display
        }
    
    case actiontypes.TOGGLE_BUTTON_CLOSE:
        return{
            ...state,
            display:false
        }
    case actiontypes.REMOVE_BUTTON:
        return{
            ...state,
            carts:removeCart(state.carts,action.payload)
        }
    case actiontypes.DESCRIBE:
        return{
            ...state,
            describe:true
        }
    case actiontypes.DESCRIBE_CLOSE:
        return{
            ...state,
            describe:false
        }
    default:
        return state
}
}


export default AddReducer;

