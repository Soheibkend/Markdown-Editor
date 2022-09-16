import React, { useContext, useState } from "react";
import { FaBars, FaSave, FaRegFile, FaTrashAlt} from 'react-icons/fa';
import MarkdownContext from "../context/MarkdownContext";
import '../index.css'
import { DeleteDocument } from "./Modals/DeleteDocument";


const Header = () => {

    const {currentDoc, saveDoc, documents, deleteDoc, toggleNav} = useContext(MarkdownContext);
    const [showModal, setShowModal] = useState(false);

    const save = () => {
        if (currentDoc === false) {
          alert("Please create a new document first!");
        } else {
          saveDoc(currentDoc);
        }
    };

    return (
        
        <div className="aa flex flex-row items-center justify-between bg-dark-gray-2 text-white h-20 z-0">
            <div className="flex flex-row items-center justify-center">
                <div className=" ml-4 mr-10">
                  <FaBars className="cursor-pointer" size={30} onClick={toggleNav}/>
                </div>

                <h1 className=" text-2xl font-bold tracking-widest mr-24">Markdown</h1>
                <FaRegFile className=" mx-4" size={20} />
                <div className="flex flex-col justify-center items-start">
                    <p className=" text-light-gray-3">Document Name</p>
                    <p>{currentDoc !== false ? documents[currentDoc].name : "Untitled"}</p>
                </div>
                
            </div>

            <div className="flex flex-row justify-center items-center">
                <FaTrashAlt className="hover:text-orange duration-200 cursor-pointer" size={18} onClick={() => setShowModal(true)} />
                <div className="flex flex-row bg-orange hover:bg-orange-light duration-150 justify-center items-center mx-6 rounded-md px-3 py-2 cursor-pointer font-semibold" onClick={save}>
                    <FaSave />
                    <p className="ml-2">Save Changes</p>
                </div>
            </div>
           {showModal && <DeleteDocument setShowModal={setShowModal}/>}
        </div>
    );
}

export default Header;