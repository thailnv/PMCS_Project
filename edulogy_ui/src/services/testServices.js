import { constants as c } from "../constants";

function getTestById(id) {
  let requestOption = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${c.apiUrl}/tests/${id}`, requestOption)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

function getTest(query) {
  let queryString = Object.keys(query).reduce((rs, v) => {
    return rs + `${v}=${query[v]}&`;
  }, "?");

  queryString = queryString.substr(0, queryString.length - 1);

  return fetch(`${c.apiUrl}/tests${queryString}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
}

function getAllTest(){
  return fetch(`${c.apiUrl}/tests`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    return data;
  })
}
export const testService = {
  getTestById,
  getTest,
  getAllTest,
};
