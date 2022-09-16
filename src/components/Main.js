import Markdown from './Markdown';
import Preview from './Preview';
import React, { useContext } from 'react';
import MarkdownContext from '../context/MarkdownContext';

const Main = ()=> {

    const {showMarkdown} = useContext(MarkdownContext)
    return (
        <div className={`${showMarkdown && "flex flex-row"} ${ !showMarkdown && " bg-dark-gray-2 flex justify-center items-center"} `}>
            {showMarkdown && <Markdown />}
            <Preview />
        </div>
    )
}

export default Main;