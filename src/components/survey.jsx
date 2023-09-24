import { SurveyContext } from "@/context/survey";
import { getAnswers, setAnswers } from "@/services/answers";
import { getQuestions } from "@/services/questions";
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Survey = ({ id, hasVoted }) => {
   const [survey, setSurvey] = useState({ title: "", hasVoted });

   const shareData = useMemo(() => {
      return { ...survey, setSurvey };
   }, [survey]);

   useEffect(() => {
      getQuestions(id).then(({ data, status }) => {
         if (status == 200) setSurvey({ ...data, hasVoted });
         // else setError(true);
      });
      if (hasVoted) {
         getAnswers(id)
            .then(({ data }) => {
               setSurvey({ ...survey, hasVoted: data?.hasVoted });
            })
            .catch((err) => {
               console.error(err);
            });
      }
   }, [id]);

   return (
      <SurveyContext.Provider value={shareData}>
         <div className="px-4 pt-4 bg-gray-100 rounded-md shadow-lg">
            <SurveyHeader />
            <SurveyList />
         </div>
      </SurveyContext.Provider>
   );
};

const SurveyHeader = () => {
   const { title } = useContext(SurveyContext);
   return <h2 className="mb-4 border-b border-current text-3xl">{title}</h2>;
};

const SurveyList = () => {
   const { answers, hasVoted, _id, setSurvey } = useContext(SurveyContext);
   const [answerCount, setAnswerCount] = useState(0);
   const navigate = useNavigate();

   useEffect(() => {
      setAnswerCount(0);
      answers?.map(({ totalAnswers }) => {
         setAnswerCount((count) => count + totalAnswers);
      });
   }, []);

   const handler = (inputVal) => {
      setAnswers(_id, { answer: inputVal }).then((data) => {
         setSurvey((answer) => {
            answer.hasVoted = true;
            navigate(".");
            return answer;
         });
      });
   };
   return (
      <ul className="w-80">
         {answers?.length
            ? answers.map(({ _id: name, totalAnswers }) => (
                 <SurveyListItem
                    key={name + totalAnswers}
                    val={totalAnswers}
                    question={name}
                    hasVoted={hasVoted}
                    width={
                       answerCount != 0
                          ? ((totalAnswers * 100) / answerCount).toFixed(2)
                          : 0.0
                    }
                    handler={handler}
                 />
              ))
            : "error pages"}
      </ul>
   );
};

const SurveyListItem = ({ width, val, question, hasVoted, handler }) => {
   return (
      <li className="mb-3 py-2 px-3 flex items-center justify-between border border-gray-500 shadow-lg relative">
         {hasVoted ? (
            <>
               <span
                  className="w-[var(--width)] h-full block bg-gray-300 absolute top-0 left-0"
                  style={{ "--width": width + "%" }}></span>
               <span className="block relative z-20">{question}</span>
               <span className="block relative z-20">{val}</span>
               <span className="w-14 block relative z-20">{width}</span>
            </>
         ) : (
            <label className="flex-1">
               <input
                  type="radio"
                  name="as"
                  value={question}
                  disabled={!hasVoted}
                  onChange={(e) => handler(e.target.value)}
               />
               <span className=" px-3 overflow-hidden text-ellipsis">
                  {question}
               </span>
            </label>
         )}
      </li>
   );
};
