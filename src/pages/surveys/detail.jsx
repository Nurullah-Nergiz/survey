import { Survey } from "@/components/surveys";
import { useParams } from "react-router-dom";

export const SurveyDetail = () => {
   const { id } = useParams();

   return (
      <section className="h-full ">
         {/* <div className="w-80 bg-primary">&nbsp;</div> */}
         <h1 className="my-3 px-4 py-2 bg-white rounded-md shadow-lg border-b border-current text-3xl">
            Surveys Details
         </h1>
         <div className="flex-1">
            <Survey id={id} hasVoted={true} headerButtons={true} />
         </div>
      </section>
   );
};
