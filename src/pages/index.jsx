// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Survey } from "@/components/surveys";
import { Link } from "react-router-dom";
import { getSurveysMe } from "@/services/surveys";

export const Home = () => {
   const [survey, setSurvey] = useState([]);

   useEffect(() => {
      getSurveysMe().then(({ data, status }) => {
         if (status == 200) {
            setSurvey([...Object.values(data)]);
         }
      });
   }, []);

   return (
      <>
         <section className="my-3 py-2 px-3 bg-white flex items-center justify-between border-b border-current rounded-lg shadow-lg">
            <h1 className="flex-1  text-3xl">My Surveys</h1>
            <Link
               className="px-2 py-1 bg-primary inline-block rounded-lg text-white"
               to="/new">
               Create New Survey
            </Link>
         </section>
         <section className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
            {/* Surveys Loop */}
            {survey?.map(({ _id }) => {
               return (
                  <Link to={`./surveys/${_id}`} key={_id}>
                     <Survey id={_id} hasVoted={false} headerButtons={false} />
                  </Link>
               );
            })}
         </section>
      </>
   );
};
