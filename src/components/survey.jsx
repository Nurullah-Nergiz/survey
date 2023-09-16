// @ts-nocheck
import React from "react";

// SurveyList.propTypes = {
//    answers: Object,
// };
export const SurveyList = ({ answers }) => {
   const answerCount = Object.values(answers).reduce(
      (acc, cur) => acc + cur,
      0
   );
   return (
      <ul className="list-disc list-outside">
         {Object.entries(answers).map(([key, val]) => {
            return (
               <SurveyListItem
                  key={key}
                  name={key}
                  width={((val * 100) / answerCount).toFixed(2) ?? 0}
                  isActive={answerCount ? true : false}
               />
            );
         })}
      </ul>
   );
};

// SurveyListItem.propTypes = {
//    name: String,
//    width: Number,
//    isActive: true,
// };
export const SurveyListItem = ({ name, width, isActive }) => {
   const w = { "--width": width + "%" };
   return (
      <li className="w-full flex mb-4 relative" style={w}>
         <span className="absolute w-[var(--width)] h-full p-3 block bg-primary"></span>
         <label className="flex-1 h-7 my-3 flex items-center justify-between z-10">
            <input
               className="absolute left-[-99rem]"
               type="radio"
               name=""
               disabled={isActive}
            />
            <span className="">+ {name}</span>
            <b>{width}%</b>
         </label>
      </li>
   );
};
