import Cookies from "js-cookie";

export const isAuthentication = () => {
   try {
      const user = JSON.parse(Cookies.get("user"));
      return user?.authentication ? true : false;
   } catch (error) {
      return false;
   }
};

export const getAuthenticatedUser = () => {
   try {
      return { ...JSON.parse(Cookies.get("user")) };
   } catch (error) {
      return {};
   }
};
