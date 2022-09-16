import React,{useContext, useState} from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import MarkdownContext from "../../context/MarkdownContext";


const AddDocument = ({setShowModal}) => {


    const { addDoc } = useContext(MarkdownContext);
    const [name, setName] = useState("");
  
    const addDocument = () => {
      if (name.trim() !== "") {
        addDoc(name);
        setShowModal(false);
      } else {
        toast.error("Input valid name");
      }
    };


    return (

        
        ReactDOM.createPortal(
        <>
        <div className="overlay" onClick={() => setShowModal(false)}></div>
        <div className=" w-96 h-60 p-6 bg-white rounded animate-pop-in fixed top-0 left-0 right-0 bottom-0 m-auto ">
          <h4 className="text-dark-gray text-xl mb-4 font-bold">
            Create new Document
          </h4>
          <label className="text-dark-gray text-sm">
            Document Name:
          </label>
          <input
            className="h-12 w-full rounded border-0 p-3 bg-light-gray-1/2 mb-4 text-dark-gray"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" onClick={addDocument}>
            <span>+</span>Create
          </button>
        </div>
        </>
        , document.body)
        
    );
}

export default AddDocument;