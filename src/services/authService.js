import http from "./httpService";
import config from "./config";
import { jwtDecode } from "jwt-decode";

const tokenKey = "token";

function serviceUrl(id) {
  return `${config.vidlyEndpoint}/auth`;
}

http.setJWT(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(serviceUrl(), { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function logout(email, password) {
  // const { data: jwt } = await http.post(serviceUrl(), { email, password });
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJWT,
  getJwt,
};
