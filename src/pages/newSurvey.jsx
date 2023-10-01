// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { setSurveys } from "../services/surveys";
import { useNavigate } from "react-router-dom";

export const NewSurvey = () => {
	const [title, setTitle] = useState("");
	const [answers, setAnswers] = useState(["", ""]);
	const navigate = useNavigate();

	const updateAnswer = (key, val) => {
		const newAnswers = [...answers];
		newAnswers[key] = val;
		setAnswers([...newAnswers]);
	};

	const newAnswer = (key) => {
		if (answers.length <= 5) {
			const pre = answers.slice(0, key);
			const next = answers.slice(key, answers.length);
			setAnswers([...pre, "", ...next]);
		}
	};

	const deleteAnswer = (key) => {
		if (answers.length > 2) {
			const pre = answers.slice(0, key - 1);
			const next = answers.slice(key, answers.length);
			console.log([...pre, key, ...next]);
			setAnswers([...pre, ...next]);
		}
	};

	const handler = () => {
		setSurveys({ title, answers })
			.then(({ data, status }) => {
				console.log(status, data);
				navigate(`../surveys/${data._id}`);
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<h1 className='my-3 pb-1 border-b border-current text-3xl'>
				Create New Survey
			</h1>
			<ul className='p-4 bg-white rounded-lg shadow-lg'>
				<li className='mb-3'>
					<p>Title</p>
					<input
						className='w-52 bg-gray-300'
						type='text'
						placeholder='Title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</li>
				{answers.map((answer, key) => {
					return (
						<li key={key} className='w-72 mb-3'>
							<p>Answer</p>
							<input
								className='w-52 bg-gray-300'
								type='text'
								placeholder='Answer'
								value={answer}
								onChange={(e) => updateAnswer(key, e.target.value)}
							/>
							<button
								className='mx-2 text-xl text-primary bx bx-plus'
								onClick={() => newAnswer(key)}
							></button>
							<button
								className='text-xl text-red-700 bx bx-x'
								onClick={() => deleteAnswer(key)}
							></button>
						</li>
					);
				})}
				<li className='w-52'>
					<button
						className='ml-auto py-2 px-3 bg-primary text-white'
						onClick={handler}
					>
						Submit
					</button>
				</li>
			</ul>
		</>
	);
};
