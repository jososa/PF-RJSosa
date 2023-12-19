import { MOCK_DATA } from "../mock/data"


export const getData = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 3000)
    })
}