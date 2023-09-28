import { SurveyContext } from "@/context/survey";
import { SurveyHeader } from "./header";
import { SurveyList } from "./list";
import { useEffect, useMemo, useState } from "react";
import { getSurveys } from "@/services/surveys";

// eslint-disable-next-line react/prop-types
export const Survey = ({ id, hasVoted, headerButtons }) => {
   const [survey, setSurvey] = useState();

   const shareData = useMemo(() => {
      return { ...survey, setSurvey };
   }, [survey]);

   useEffect(() => {
      getSurveys(id).then(({ data, status }) => {
         if (status == 200) setSurvey({ ...data, hasVoted });
         // else setError(true);
      });
   }, []);

   return (
      <SurveyContext.Provider value={shareData}>
         <div className="p-4 bg-white rounded-md shadow-lg">
            <SurveyHeader headerButtons={headerButtons} />
            <SurveyList />
         </div>
      </SurveyContext.Provider>
   );
};
