
const initialState = {
    clickdata: []
}

// const keyValue = (state = false, action) => {
//     // console.log("reducer " + state)
//     switch (action.type) {
//         case "SIGN_IN":
//             // console.log("reducer "+state);
//             return  action.data
//         case "SIGN_OUT":
//             // console.log("reducer "+state);
//             return  action.data
//         default:
//             return state
//     }
// }


// export default keyValue;




const keyValue = (state = initialState, action) => {
        // console.log("reducer " + state)
        switch (action.type) {
            case "SIGN_IN":
                // console.log("reducer "+state);
                return {
                    ...state,
                    clickdata: action.data
                }
            case "SIGN_OUT":
                // console.log("reducer "+state);
                return {
                    ...state,
                    clickdata: action.data
                }
            default:
                return state
        }
    }
    
    
 export default keyValue;

    