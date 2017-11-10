const CREATE_URL = (path = "") => `http://localhost:5050/api/users/${path}`;

const login = credentials => {
  return fetch(CREATE_URL("login"), {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

const signup = credentials => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

const update = (id, credentials) => {
  return fetch(CREATE_URL(id), {
    method: "PUT",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

const getCurrentUser = () => {
  return fetch(CREATE_URL("current"), {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export default {
  login,
  signup,
  update,
  getCurrentUser
};
