import axios from ".";

export const getSurveysMe = () =>
	axios(`/surveys/`, {
		method: "get",
	});

export const getSurveys = (id) =>
	axios(`/surveys/${id}`, {
		method: "get",
	});

export const setSurveys = (data) =>
	axios(`/surveys/`, {
		method: "post",
		data,
	});

export const putSurveys = (id, data) =>
	axios(`/surveys/${id}`, {
		method: "put",
		data,
	});

export const deleteSurveys = (id) =>
	axios(`/surveys/${id}`, {
		method: "delete",
	});
