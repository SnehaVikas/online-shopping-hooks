import axios from 'axios'

export function fetchAllCartAllActions() {

    return (dispatch) => {

        return axios.get("http://localhost:8081/cart/all").then(resp => {

            dispatch({

                type: "FetchAll",

                payload: resp.data

            });



        }

        )

    }

}