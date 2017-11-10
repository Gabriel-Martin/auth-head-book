const CREATE_URL = (path = "") => `http://localhost:5050/api/posts`;

const get = () => {
  return fetch(CREATE_URL(""), {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

const create = message => {
  return fetch(CREATE_URL(""), {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export default {
  get,
  create
};
