import { SurveyContext } from "@/context/survey";
import { getAnswers, setAnswers } from "@/services/answers";
import { useContext, useEffect, useState } from "react";
import { SurveyListItem } from "./listItem";
import { Vote } from "./vote";
import { getSurveys } from "@/services/surveys";

export const SurveyList = () => {
   const {
      answers,
      hasVoted: defHasVoted,
      _id: id,
      setSurvey,
   } = useContext(SurveyContext);
   const [answerCount, setAnswerCount] = useState(0);
   const [hasVoted, setHasVoted] = useState();

   useEffect(() => {
      console.log(defHasVoted);
      setHasVoted(defHasVoted);
      if (defHasVoted) {
         getAnswers(id)
            .then(({ data }) => {
               console.log(data.hasVoted);
               setHasVoted(data.hasVoted);
            })
            .catch((err) => {
               console.error(err);
            });
      }
      setAnswerCount(0);
      answers?.map(({ totalAnswers }) => {
         setAnswerCount((count) => count + totalAnswers);
      });
   }, [defHasVoted]);

   const handler = (inputVal) => {
      setAnswers(id, { answer: inputVal }).then(() => {
         getSurveys(id).then(({ data, status }) => {
            if (status == 200) setSurvey({ ...data, hasVoted: false });
            // else setError(true);
         });
      });
   };
   return (
      <ul className="w-full">
         {answers?.length
            ? answers.map(({ _id: name, totalAnswers }) => (
                 <li
                    className="w-full mb-3 py-2 px-3 flex items-center justify-between border border-gray-500 shadow-lg relative"
                    key={name + totalAnswers}>
                    {hasVoted ? (
                       <Vote question={name} handler={handler} />
                    ) : (
                       <SurveyListItem
                          val={totalAnswers}
                          question={name}
                          width={
                             answerCount != 0
                                ? ((totalAnswers * 100) / answerCount).toFixed(
                                     2
                                  )
                                : 0.0
                          }
                       />
                    )}
                 </li>
              ))
            : ""}
      </ul>
   );
};
