// eslint-disable-next-line react/prop-types
export const Vote = ({ question, handler }) => {
   return (
      <>
         <label className="flex-1">
            <input
               type="radio"
               name="as"
               value={question}
               onChange={(e) => handler(e.target.value)}
            />
            <span className=" px-3 overflow-hidden text-ellipsis">
               {question}
            </span>
         </label>
      </>
   );
};
