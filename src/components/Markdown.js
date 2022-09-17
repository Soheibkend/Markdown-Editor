import React, { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";
import {FaEyeSlash, FaEye} from 'react-icons/fa';


const Markdown = () => {

  const {markdown, handleMarkdownChange,showMarkdown, setShowMarkdown} = useContext(MarkdownContext);

  return (
    <div className={`${!showMarkdown && "hidden"} mob:w-screen mob:h-full flex flex-col w-1/2 calcheight mob:calcheightmob bg-dark-gray-3 border-r border-light-gray-2 `}>
      <div className=" flex items-center justify-between bg-dark-gray-3">
      <div className=" flex items-center text-light-gray-3 h-fit p-3 ml-4 font-semibold mob:ml-2 mob:font-medium mob:text-sm mob:p-2"> Markdown</div>
      {
        showMarkdown ? (
        <FaEye className="text-light-gray-3 mr-4 hover:text-orange cursor-pointer duration-200" onClick={() => setShowMarkdown(prevState => !prevState)}/>) : (
        <FaEyeSlash className="text-light-gray-3 mr-4 hover:text-orange cursor-pointer duration-200" onClick={() => setShowMarkdown(prevState => !prevState)}/>)
      }
      </div>
      
        <textarea className="overflow-y-auto w-full h-screen bg-dark-gray-4 text-light-gray-2 resize-none pl-4 pt-4 mob:pr-2" spellCheck={false} onChange={handleMarkdownChange} value={markdown}>
         
        </textarea>     
    </div>
  );
}

export default Markdown;