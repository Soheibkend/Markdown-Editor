import React from "react";
import {FaRegFile} from 'react-icons/fa';


const Item = ({name, date, click}) => {

    return (
        <div className="flex flex-row justify-start items-center ml-4 mb-5 cursor-pointer" onClick={click}>
            <FaRegFile size={20} className=' text-white'/>
            <div className="flex flex-col justify-start items-center ml-2">
                <p className=" text-light-gray-3"> {date}</p>
                <p className="text-white hover:text-orange duration-200">{name}</p>
            </div>
        </div>
    );
}

export default Item;