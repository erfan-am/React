import * as actiontypes from '../actionTypes'
const ININTIAL={
    newsItem:[]
}
const  AddReducer=(state=ININTIAL,action)=>{
switch (action.type) {
    case actiontypes.NEWW_ITEM_SET:
        return{
            ...state,
            newsItem:action.payload
        }
    default:
        return state
}
}


export default AddReducer;

