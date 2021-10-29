// import { Add_data } from "../constant"

export const clickedData = (data) => {
// console.log(data);
    return {
        type: "ADD_data",
        data: data
    }
}