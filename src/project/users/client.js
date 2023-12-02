import axios from "axios";
const request = axios.create({
  withCredentials: true,
});
axios.defaults.withCredentials = true;
export const BASE_API = 'https://kanbas-node-server-app-a6-x68s.onrender.com';
export const USERS_API = `${BASE_API}/api/users`;
axios.get('https://kanbas-node-server-app-a6-x68s.onrender.com/api/users')
  .then(response => {
    console.log('Response:', response);
    // other response handling code
  })
  .catch(error => {
    console.error('Error:', error);
    // error handling code
  });
export const signin = async (user) => {
  const response = await request.post(`${USERS_API}/signin`, user);
  return response.data;
};

export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const users = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await request.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};


export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};


export const signup = async (credentials) => {
  const response = await request.post(
    `${USERS_API}/signup`, credentials);
  return response.data;
};


export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};

export const findUsersByRole = async (role) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};
