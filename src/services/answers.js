import axios from ".";

export const getAnswers = (id) =>
	axios(`/answers/${id}`, {
		method: "get",
	});

export const setAnswers = (id, data) =>
	axios(`/answers/${id}`, {
		method: "post",
		data,
	});
