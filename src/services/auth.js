import axios from ".";

/**
 *
 * @param {Object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns
 */
export const loginService = (data) =>
	axios("/login", {
		method: "post",
		data,
	});

export const registerService = (data) =>
	axios("/register", {
		method: "post",
		data,
	});
