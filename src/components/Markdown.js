import React, { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";


const Markdown = () => {

  const {markdown, handleMarkdownChange} = useContext(MarkdownContext);

  return (
    <div className="flex flex-col w-1/2 calcheight bg-dark-gray-3 border-r border-light-gray-2 ">
      <div className=" flex items-center text-light-gray-3 h-fit p-3 ml-4 font-semibold"> Markdown</div>
        <textarea className="overflow-y-auto w-full h-screen bg-dark-gray-4 text-light-gray-2 resize-none pl-4 pt-4" spellCheck={false} onChange={handleMarkdownChange} value={markdown}>
         
        </textarea>     
    </div>
  );
}

export default Markdown;