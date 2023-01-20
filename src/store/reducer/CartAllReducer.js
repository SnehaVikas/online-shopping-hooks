const initialState = {

    Carts: [],

}

function CartAllReducer(state = initialState, action) {

    if (action.type === "FetchAll") {

        return {

            ...state,

            Carts: action.payload

        }

    }

    else {

        return state;

    }

}

export default CartAllReducer;