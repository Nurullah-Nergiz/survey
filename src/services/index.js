import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:8000/";

axios.interceptors.request.use(function (config) {
	config.headers.authentication = JSON.parse(
		Cookies.get("user") ?? '{ "authentication": "" }',
	).authentication;

	return config;
});

export default axios;