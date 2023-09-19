// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Survey } from "../components/survey";
import { Link } from "react-router-dom";
import { getQuestions } from "../services/questions";

export const Home = () => {
   const [survey, setSurvey] = useState([]);

   useEffect(() => {
      // getQuestions().then(({ data, status }) => {
      //    if (status == 200) {
      //       setSurvey([...Object.values(data)]);
      //       console.log(Object.values(data));
      //    }
      // });
   }, []);

   return (
      <>
         <section className="my-3 pb-1 flex items-center justify-between border-b border-current">
            <h1 className="flex-1  text-3xl">My Surveys</h1>
            <Link
               className="px-2 py-1 bg-primary inline-block rounded-lg text-white"
               to="/new">
               Create New Survey
            </Link>
         </section>
         <section className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
            {/* Surveys Loop */}
            {survey?.map((survey) => {
               return <Survey survey={survey} key={survey._id} />;
            })}
         </section>
      </>
   );
};
