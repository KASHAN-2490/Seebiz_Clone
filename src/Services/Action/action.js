import { Add_data } from "../constant"

export const clickedData = (data) => {
// console.log(data);
    return {
        type: Add_data,
        data: data
    }
}