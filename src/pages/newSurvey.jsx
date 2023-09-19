import React, { useState } from "react";
import { setQuestions } from "../services/questions";

export const NewSurvey = () => {
   const [title, setTitle] = useState("");
   /**
    * type Array
    */
   const [answers, setAnswers] = useState(["a", "s"]);

   const updateAnswer = (key, val) => {
      const newAnswers = [...answers];
      newAnswers[key] = val;
      setAnswers([...newAnswers]);
   };

   const newAnswer = (k, { val, key }) => {
      if (k == "Enter" && val.trim()) {
         const pre = answers.slice(0, key);
         const next = answers.slice(key, answers.length);
         setAnswers([...pre, val, ...next]);
      }
   };

   const handler = () => {
      setQuestions({ title, question: answers })
         .then((data) => {
            console.log(data);
         })
         .catch((err) => console.error(err));
   };

   return (
      <>
         <h1 className="my-3 pb-1 border-b border-current text-3xl">
            Create New Survey
         </h1>
         <ul className="bg-white">
            <li>
               <p>Title</p>
               <input
                  className="bg-gray-300"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </li>
            {answers.map((answer, key) => {
               return (
                  <li key={key}>
                     <p>Answer</p>
                     <input
                        className="bg-gray-300"
                        type="text"
                        placeholder="Answer"
                        value={answer}
                        onChange={(e) => updateAnswer(key, e.target.value)}
                        onKeyDown={(e) => {
                           newAnswer(e.key, { val: e.target.value, key });
                        }}
                     />
                  </li>
               );
            })}
            <li>
               <button onClick={handler}>Submit</button>
            </li>
         </ul>
      </>
   );
};
