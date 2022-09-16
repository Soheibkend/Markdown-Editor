import { useContext } from "react";
import MarkdownContext from "../../context/MarkdownContext";
import ReactDOM from "react-dom";

export const DeleteDocument = ({ setShowModal }) => {
    const { deleteDoc, currentDoc } = useContext(MarkdownContext);
  
    const handleDelete = () => {
      deleteDoc(currentDoc);
      setShowModal(false);
    };
  
    return (

        ReactDOM.createPortal (
        <>
        <div className="overlay" onClick={() => setShowModal(false)}></div>
        <div className="w-96 h-60 p-6 bg-white rounded animate-pop-in fixed top-0 left-0 right-0 bottom-0 m-auto font-Roboto-Slab">
          <h4 className="text-dark-gray text-xl mb-4 font-bold">
            Delete this document?
          </h4>
          <p className="text-light-gray-3 text-sm mb-4">
            Are you sure you want to delete the document and its
            contents? This action cannot be reversed.
          </p>
          <button className="btn w-full mt-9" onClick={handleDelete}>
            Confirm & Delete
          </button>
        </div>
      </>
        ,document.body)
      
    );
  };