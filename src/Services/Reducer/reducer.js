import { Add_data } from "../constant"

const initialState = {
    clickdata: []
}

export default function clickeditems(state = initialState, action) {
    switch (action.type) {
        case Add_data:
            // console.log(action);
            return {
                ...state,
                clickdata: action.data
            }
        default:
            return state
    }
}