import React from "react";
import { SurveyList } from "../components/survey";
import { Link } from "react-router-dom";

export const Home = () => {
   const survey = [
      {
         _id: "asasdad",
         title: "demo 1",
         questions: ["a", "b", "c", "d"],
         answers: {
            a: 10,
            b: 5,
            c: 3,
            d: 0,
         },
      },
      {
         _id: "asasdads",
         title: "demo 2",
         questions: ["a", "b", "c"],
         answers: {
            a: 10,
            b: 5,
            c: 0,
         },
      },
   ];
   return (
      <>
         <h1 className="my-3 border-b-2 border-current text-3xl">My Surveys</h1>
         <section className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
            {/* Surveys Loop */}
            {survey?.map((s) => {
               return (
                  <div className="px-4 pt-4 bg-gray-100 rounded-md" key={s._id}>
                     <p>{s.title}</p>
                     <SurveyList answers={s.answers} />
                  </div>
               );
            })}
         </section>
         <Link
            className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center fixed bottom-4 right-4"
            to="/new">
            New
         </Link>
      </>
   );
};
