import { SurveyContext } from "@/context/survey";
import { UserContext } from "@/context/user";
import { useContext } from "react";
import { deleteSurveys } from "@/services/surveys";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SurveyHeader = ({ headerButtons }) => {
   const { title, user: surveyUser, _id } = useContext(SurveyContext);
   const { user } = useContext(UserContext);
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
         {headerButtons === true && surveyUser?._id == user?._id ? (
            <span>
               <Link
                  to={`../surveys/${_id}/edit`}
                  className="py-1 px-2 text-white bg-green-700 rounded-md bx bx-edit-alt">
                  Edit
               </Link>
               <button
                  className="ml-3 py-1 px-2 text-white bg-red-700 rounded-md bx bx-x"
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
