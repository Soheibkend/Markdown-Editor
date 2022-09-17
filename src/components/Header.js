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
        
        <div className=" mob:h-10 flex flex-row items-center justify-between bg-dark-gray-2 text-white h-20 w-full z-0">
            <div className="flex flex-row items-center justify-center mob:w-fit">
                <div className=" ml-4 mr-10 mob:ml-2 mob:mr-4">
                  <FaBars className="cursor-pointer text-3xl mob:text-xl" onClick={toggleNav}/>
                </div>

                <h1 className=" hidden md:block text-2xl font-bold tracking-widest mr-24 mob:mr-12 mob:text-lg">Markdown</h1>
                <FaRegFile className=" mx-4 text-xl mob:text-sm" />
                <div className="flex flex-col justify-center items-start">
                    <p className=" text-light-gray-3 hidden md:block">Document Name</p>
                    <p className="mob:text-sm">{currentDoc !== false ? documents[currentDoc].name : "Untitled"}</p>
                </div>
                
            </div>

            <div className="flex flex-row justify-center items-center">
                <FaTrashAlt className="hover:text-orange duration-200 cursor-pointer text-xl mob:text-sm" onClick={() => setShowModal(true)} />
                <div className="flex flex-row bg-orange hover:bg-orange-light duration-150 justify-center items-center mx-6 rounded-md px-3 py-2 cursor-pointer font-semibold mob:mr-3 mob:ml-6 mob:font-medium" onClick={save}>
                    <FaSave className=" mob:text-sm"/>
                    <p className="ml-2 hidden md:block">Save Changes</p>
                </div>
            </div>
           {showModal && <DeleteDocument setShowModal={setShowModal}/>}
        </div>
    );
}

export default Header;