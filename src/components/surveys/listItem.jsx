// eslint-disable-next-line react/prop-types
export const SurveyListItem = ({ width, val, question }) => {
   return (
      <>
         <span
            className="w-[var(--width)] h-full block bg-gray-300 absolute top-0 left-0"
            style={{ "--width": width + "%" }}></span>
         <span className="block relative z-20">{question}</span>
         <span className="block relative z-20">{val}</span>
         <span className="w-14 block relative z-20">{width}</span>
      </>
   );
};
