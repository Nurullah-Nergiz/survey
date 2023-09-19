import { instance } from ".";

export const getQuestions = () =>
   instance("/questions", {
      method: "get",
   });

export const setQuestions = (data) =>
   instance("/questions", {
      method: "post",
      data,
   });
