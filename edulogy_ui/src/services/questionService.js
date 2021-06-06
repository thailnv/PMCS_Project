import { constants as c } from "../constants";

function getAllQuestion(){
    return fetch(`${c.apiUrl}/questions`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        return data;
    })
}

export const questionService = {
    getAllQuestion,
}