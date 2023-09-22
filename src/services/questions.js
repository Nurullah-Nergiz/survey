import { instance } from ".";

export const getQuestions = (id) =>
   instance(`/questions/${id}`, {
      method: "get",
   });

export const setQuestions = (data) =>
   instance(`/questions/`, {
      method: "post",
      data,
   });
