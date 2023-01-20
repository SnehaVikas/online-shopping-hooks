const initialState = {
   
    product: null,
}

export default function ProductReducer(state = initialState, action){
    if(action.type === "product/fetch"){
        return {
            ...state,
            product: action.payload
        }
    }
    else{
        return state
    }
}