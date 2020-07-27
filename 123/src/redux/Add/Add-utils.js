export const additemToCart=(cartItems,cartitemToAdd)=>{
    const existCart=cartItems.find(cartItem=>cartItem.id === cartitemToAdd.id);
    if(existCart){
        return cartItems.map(cartItem=> 
            cartItem.id === cartitemToAdd.id ? {...cartItem }: cartItem
            )
    }
    return [...cartItems,{...cartitemToAdd}]
}


export const removeCart=(cartItems,cartToRemove)=>{
    const existCart=cartItems.find(cartItem=>cartItem.id === cartToRemove.id);
    if(existCart){
        return cartItems.filter(cartItem=> cartItem.id !== cartToRemove.id)
    }
}

export const addLike=(cartLiked,heart)=>{

    if(cartLiked){
        return cartLiked ? heart ===true : heart ===null
    }

}