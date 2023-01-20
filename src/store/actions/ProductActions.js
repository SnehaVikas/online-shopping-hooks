import axios from 'axios';


export function fetchProductDetailsAction(productId){
    return (dispatch) => {
        return axios.get("http://localhost:8081/product/" +productId).then(
            resp => {
                dispatch({
                    type: "product/fetch",
                    payload: resp.data
                });
            }
        ).catch(error=> {
            alert(error.response.data)
        })
    }
}