import { instance } from ".";

export const getAnswers = (id) =>
   instance(`/answers/${id}`, {
      method: "get",
   });

export const setAnswers = (id, data) =>
   instance(`/answers/${id}`, {
      method: "post",
      data,
   });
