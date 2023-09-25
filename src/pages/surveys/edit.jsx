import React, { useEffect, useState } from "react";
import { getSurveys, putSurveys } from "@/services/surveys";
import { useNavigate, useParams } from "react-router-dom";

export const SurveyEdit = () => {
   const [title, setTitle] = useState("");
   const [answers, setAnswers] = useState(["a", "s"]);
   const navigate = useNavigate();
   const { id } = useParams();

   const updateAnswer = (key, val) => {
      const newAnswers = [...answers];
      newAnswers[key] = val;
      setAnswers([...newAnswers]);
   };

   const newAnswer = (key) => {
      const pre = answers.slice(0, key);
      const next = answers.slice(key, answers.length);
      setAnswers([...pre, "", ...next]);
   };

   const deleteAnswer = (key) => {
      if (answers.length > 2) {
         const pre = answers.slice(0, 1 - key);
         const next = answers.slice(key, answers.length);
         console.log(key, ...pre, ...next);
         setAnswers([...pre, ...next]);
      }

      console.log(answers.length);
   };

   const handler = () => {
      putSurveys(id, { title, answers })
         .then(({ data }) => {
            navigate(`../surveys/${data._id}`);
         })
         .catch((err) => console.error(err));
   };

   useEffect(() => {
      getSurveys(id).then(({ data }) => {
         console.log(data);
         setTitle(data?.title);
         setAnswers(data?.answers);
      });
      console.log(answers);
   }, []);

   return (
      <>
         <h1 className="my-3 pb-1 border-b border-current text-3xl">
            Create New Survey
         </h1>
         <ul className="p-4 bg-white rounded-lg shadow-lg">
            <li className="mb-3">
               <p>Title</p>
               <input
                  className="w-52 bg-gray-300"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </li>
            {answers.map((answer, key) => {
               return (
                  <li key={key} className="w-72 mb-3">
                     <p>Answer</p>
                     <p>{answers[0]._id}</p>
                     <input
                        className="w-52 bg-gray-300"
                        type="text"
                        placeholder="Answer"
                        value={answer?._id}
                        onChange={(e) => updateAnswer(key, e.target.value)}
                     />
                     <button
                        className="mx-2 text-xl text-primary bx bx-plus"
                        onClick={() => newAnswer(key)}></button>
                     <button
                        className="text-xl text-red-700 bx bx-x"
                        onClick={() => deleteAnswer(key)}></button>
                  </li>
               );
            })}
            <li className="w-52">
               <button
                  className="ml-auto py-2 px-3 bg-primary text-white"
                  onClick={handler}>
                  Submit
               </button>
            </li>
         </ul>
      </>
   );
};
