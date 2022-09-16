import React from "react";
import { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";
import ReactMarkdown from 'react-markdown';
import {FaEyeSlash, FaEye} from 'react-icons/fa';

const Preview = () => {

  const {markdown, showMarkdown, setShowMarkdown} = useContext(MarkdownContext);

    return (
        <div className="flex flex-col  w-1/2 calcheight bg-dark-gray-3 border-r border-light-gray-2">
          <div className=" flex items-center justify-between bg-dark-gray-3">
            <div className=" text-light-gray-3 h-fit p-3 ml-4 font-semibold">Preview</div>
            {
              showMarkdown ? (
              <FaEye className="text-light-gray-3 mr-4 hover:text-orange cursor-pointer duration-200" onClick={() => setShowMarkdown(prevState => !prevState)}/>) : (
              <FaEyeSlash className="text-light-gray-3 mr-4 hover:text-orange cursor-pointer duration-200" onClick={() => setShowMarkdown(prevState => !prevState)}/>)
            }
          </div>
          
          <div className="overflow-y-auto h-screen w-full bg-dark-gray-4 text-light-gray-2 pl-4 pt-4">
            <ReactMarkdown className=' prose prose-headings:text-light-gray-2 prose-p:text-light-gray-2 prose-ul:text-light-gray-2 prose-ol:text-light-gray-2 prose-li:text-light-gray-2 prose-orange prose-blockquote:text-light-gray-2 prose-code:text-light-gray-2'>   
            {markdown}
            </ReactMarkdown>            
          </div>
        </div>
    );
}

export default Preview;