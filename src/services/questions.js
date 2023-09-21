import { instance } from ".";

export const getQuestions = (id) =>
   instance(`/questions/${id}`, {
      method: "get",
   });

export const setQuestions = (id, data) =>
   instance(`/questions/${id}`, {
      method: "get",
      data,
   });
