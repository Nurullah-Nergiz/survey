import { instance } from ".";

/**
 *
 * @param {Object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns
 */
export const loginService = (data) =>
   instance("/login", {
      method: "post",
      data,
   });

export const registerService = (data) =>
   instance("/register", {
      method: "post",
      data,
   });
