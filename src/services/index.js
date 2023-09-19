import axios from "axios";
import Cookies from "js-cookie";

const user = Cookies.get("user") ?? '{ "authentication": "" }';
const authentication = JSON.parse(user).authentication;

export const instance = axios.create({
   baseURL: "http://localhost:8000/",
   timeout: 1000,
   headers: {
      "Access-Control-Allow-Origin": "*",
      // @ts-ignore
      authentication,
   },
});
