/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { NotFound } from "@/pages/NotFound";
import { getQuestions } from "@/services/questions";
import React, { useEffect, useMemo, useState } from "react";

export const Survey = ({ id }) => {
   const [survey, setSurvey] = useState({
      title: "as",
      answers: [{ _id: "", totalAnswers: 0 }],
   });
   const [isError, setError] = useState(null);
   useEffect(() => {
      getQuestions(id).then(({ data, status }) => {
         if (status == 200) setSurvey({ ...data });
         else setError(true);
      });
   }, [id]);
   return (
      <>
         <div className="px-4 pt-4 bg-gray-100 rounded-md shadow-lg">
            <h2 className="mb-4 border-b border-current text-3xl">
               {survey?.title}
            </h2>
            <SurveyList answers={survey.answers} hasVoted={false} />
         </div>
         {/* <NotFound /> */}
      </>
   );
};

const SurveyList = ({ answers, hasVoted }) => {
   const [answerCount, setAnswerCount] = useState(0);

   useEffect(() => {
      answers.map(({ totalAnswers }) => {
         setAnswerCount((count) => count + totalAnswers);
      });

      if (hasVoted) {
      }
   }, []);

   return (
      <ul className="w-80">
         {answers.length
            ? answers.map(({ _id, totalAnswers }) => (
                 <SurveyListItem
                    key={_id + totalAnswers}
                    question={_id}
                    val={totalAnswers}
                    width={((totalAnswers * 100) / answerCount).toFixed(2) ?? 0}
                    hasVoted={true}
                 />
              ))
            : ""}
         {/* {answers
            ? answers.map((val, key) => (
                 //   <SurveyListItem
                 //      key={key}
                 //      question={key}
                 //      val={val}
                 //      width={((val * 100) / answerCount).toFixed(2) ?? 0}
                 //      hasVoted={hasVoted}
                 //   />
              ))
            : ""} */}
      </ul>
   );
};

const SurveyListItem = ({ question, val, width, hasVoted }) => {
   const w = { "--width": width + "%" };

   const handler = (val) => {
      console.log(val);
   };

   return (
      <li className="mb-3 py-2 px-3 flex items-center justify-between border border-gray-500 shadow-lg relative">
         {hasVoted ? (
            <>
               <span
                  className="w-[var(--width)] h-full block bg-gray-300 absolute top-0 left-0"
                  style={w}></span>
               <span className="block relative z-20">{question}</span>
               <span className="block relative z-20">{val}</span>
               <span className="block relative z-20">{width}</span>
            </>
         ) : (
            <label className="flex-1">
               <input
                  type="radio"
                  name="as"
                  value={val}
                  onChange={(e) => handler(e.target.value)}
               />
               <span className="px-3 overflow-hidden text-ellipsis">
                  {question}
               </span>
            </label>
         )}
      </li>
   );
};
