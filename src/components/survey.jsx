/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { NotFound } from "@/pages/NotFound";
import { getAnswers, setAnswers } from "@/services/answers";
import { getQuestions } from "@/services/questions";
import React, { useEffect, useState } from "react";

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
            <SurveyList answers={survey.answers} id={id} hasVoted={true} />
         </div>
         {/* <NotFound /> */}
      </>
   );
};

const SurveyList = ({ answers, hasVoted, id }) => {
   const [answerCount, setAnswerCount] = useState(0);
   const [voteData, setVoteData] = useState(hasVoted);

   useEffect(() => {
      answers.map(({ totalAnswers }) => {
         setAnswerCount((count) => count + totalAnswers);
      });

      if (voteData) {
         getAnswers(id)
            .then(({ data }) => {
               setVoteData(data?.hasVoted);
            })
            .catch((err) => {
               console.error(err);
            });
      }
   }, [answers, id, voteData]);

   return (
      <ul className="w-80">
         {answers?.length
            ? answers.map(({ _id, totalAnswers }) => (
                 <SurveyListItem
                    key={_id + totalAnswers}
                    question={_id}
                    val={_id}
                    width={
                       answerCount != 0
                          ? ((totalAnswers * 100) / answerCount).toFixed(2)
                          : 0
                    }
                    id={id}
                    hasVoted={voteData}
                 />
              ))
            : ""}
      </ul>
   );
};

const SurveyListItem = ({ question, val, width, hasVoted, id }) => {
   const [hasVotedValue, setHasVotedValue] = useState();
   const w = { "--width": width + "%" };

   useEffect(() => setHasVotedValue(hasVoted), []);

   const handler = (val) => {
      setAnswers(id, { answer: val }).then((data) => {
         setHasVotedValue(false);
         console.log(data);
      });
   };

   return (
      <li className="mb-3 py-2 px-3 flex items-center justify-between border border-gray-500 shadow-lg relative">
         {!hasVotedValue ? (
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
