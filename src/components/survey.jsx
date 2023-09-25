import { SurveyContext } from "@/context/survey";
import { NotFound } from "@/pages/NotFound";
import { getAnswers, setAnswers } from "@/services/answers";
import { deleteSurveys, getSurveys } from "@/services/surveys";
import Cookies from "js-cookie";
import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";

export const Survey = ({ id, hasVoted, headerButtons }) => {
   const [survey, setSurvey] = useState({ title: "", hasVoted });

   const shareData = useMemo(() => {
      return { ...survey, setSurvey };
   }, [survey]);

   useEffect(() => {
      getSurveys(id).then(({ data, status }) => {
         if (status == 200) setSurvey({ ...data, hasVoted });
         // else setError(true);
      });
   }, [id]);

   return (
      <SurveyContext.Provider value={shareData}>
         <div className="p-4 bg-white rounded-md shadow-lg">
            <SurveyHeader headerButtons={headerButtons} />
            <SurveyList />
         </div>
      </SurveyContext.Provider>
   );
};

const SurveyHeader = ({ headerButtons }) => {
   const { title, user, _id } = useContext(SurveyContext);
   const navigate = useNavigate();

   const deleteHandler = (id) => {
      deleteSurveys(id)
         .then((data) => {
            console.log(data);
            navigate("/");
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="mb-4 border-b border-current flex items-center justify-between">
         <h2 className=" text-3xl">{title}</h2>
         {headerButtons === true &&
         user?._id == JSON.parse(Cookies.get("user")).user._id ? (
            <span>
               <Link
                  to={`../surveys/${_id}/edit`}
                  className="py-1 px-2 bg-green-700 rounded-md bx bx-edit-alt">
                  Edit
               </Link>
               <button
                  className="ml-3 py-1 px-2 bg-red-700 rounded-md bx bx-x"
                  onClick={() => deleteHandler(_id)}>
                  Delete
               </button>
            </span>
         ) : (
            <>{""}</>
         )}
      </div>
   );
};

const SurveyList = () => {
   const {
      answers,
      hasVoted: defHasVoted,
      _id: id,
      setSurvey,
   } = useContext(SurveyContext);
   const [answerCount, setAnswerCount] = useState(0);
   const [hasVoted, setHasVoted] = useState();

   const navigate = useNavigate();

   useEffect(() => {
      setHasVoted(defHasVoted);
      if (hasVoted) {
         getAnswers(id)
            .then(({ data }) => {
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
   }, [id]);

   // console.log(useRoutes());

   const handler = (inputVal) => {
      setAnswers(id, { answer: inputVal }).then((data) => {
         window.location.reload();
      });
   };
   return (
      <ul className="w-full">
         {answers?.length ? (
            answers.map(({ _id: name, totalAnswers }) => (
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
         ) : (
            <NotFound />
         )}
      </ul>
   );
};

const SurveyListItem = ({ width, val, question, hasVoted, handler }) => {
   return (
      <li className="w-full mb-3 py-2 px-3 flex items-center justify-between border border-gray-500 shadow-lg relative">
         {/* {hasVoted ? "true" : "false"} */}
         {hasVoted ? (
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
         ) : (
            <>
               <span
                  className="w-[var(--width)] h-full block bg-gray-300 absolute top-0 left-0"
                  style={{ "--width": width + "%" }}></span>
               <span className="block relative z-20">{question}</span>
               <span className="block relative z-20">{val}</span>
               <span className="w-14 block relative z-20">{width}</span>
            </>
         )}
      </li>
   );
};
