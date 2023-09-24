import { Survey } from "@/components/survey";
import { useParams } from "react-router-dom";

export const SurveyDetail = () => {
   const { id } = useParams();

   return (
      <section className="h-full flex">
         {/* <div className="w-80 bg-primary">&nbsp;</div> */}
         <div className="flex-1">
            <h1>Title</h1>
            <Survey id={id} hasVoted={true} />
         </div>
      </section>
   );
};
