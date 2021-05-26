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

export const testService = {
  getTestById,
};
