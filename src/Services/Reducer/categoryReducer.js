// import { Add_data } from "../constant"

const initialState = {
    clickdata: []
}

 const categoryitems = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_data":
            // console.log(action);
            return {
                ...state,
                clickdata: action.data
            }
        default:
            return state
    }
}




export default categoryitems;


