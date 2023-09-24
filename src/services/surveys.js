import { instance } from ".";

export const getSurveysMe = () =>
   instance(`/surveys/`, {
      method: "get",
   });

export const getSurveys = (id) =>
   instance(`/surveys/${id}`, {
      method: "get",
   });

export const setSurveys = (data) =>
   instance(`/surveys/`, {
      method: "post",
      data,
   });
