import React, { useContext, useState } from "react";
import {FaTimes} from 'react-icons/fa';
import {IoIosAdd} from 'react-icons/io';
import MarkdownContext from "../context/MarkdownContext";
import Item from "./Item";
import moment from "moment";
import AddDocument from "./Modals/AddDocument";

const Sidebar = () => {

    const {documents, selectDoc} = useContext(MarkdownContext);
    const [showModal, setShowModal] = useState(false);
    
    return (
       
        <div className=" nav h-full w-64 bg-dark-gray-3 fixed top-0 left-0 overflow-hidden -translate-x-64 transition-transform duration-300">
            <div className="flex flex-row justify-start items-start ml-4 my-4">
               
               <h1 className=" text-2xl font-semibold tracking-widest mr-6 my-3 text-light-gray-2">Markdown</h1>
            </div>

            <p className="font-medium text-light-gray-3 ml-4">MY DOCUMENTS</p>

            <div className="flex flex-row justify-center items-center p-3 bg-orange mx-4 rounded-md text-white hover:bg-orange-light cursor-pointer duration-200 my-6" onClick={() => setShowModal(true)}>
                <IoIosAdd />
                <p>New Document</p>
            </div>
            
            {
                documents.map ((doc, index) => {
                    return (
                        <Item key={index}
                            name={doc.name}
                            date={moment(doc.createdAt).format("Do MMMM YYYY")}
                            click={() => selectDoc(index)}
                        />
                    )
                })
            }

            {showModal && <AddDocument setShowModal={setShowModal} />} 
            
        </div>
    );
}

export default Sidebar;