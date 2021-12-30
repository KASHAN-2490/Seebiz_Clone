// import { Add_data } from "../constant"

export const categoryData = (data) => {
// console.log(data);
    return {
        type: "ADD_data",
        data: data
    }
}


// export const loginKey = (data) => {
//     // console.log("action "+data);
//     return {
//         type: "SIGN_IN",
//         data: data
//     }
// }

// export const logoutKey = (data) => {
//     // console.log("action "+data);
//     return {
//         type: "SIGN_OUT",
//         data: data
//     }
// }


export const addData = (data) => {
    // console.log("action "+data);
    return {
        type: "SIGN_IN",
        data: data
    }
}


export const removeData = (data) => {
    // console.log("action "+data);
    return {
        type: "SIGN_OUT",
        data: data
    }
}

