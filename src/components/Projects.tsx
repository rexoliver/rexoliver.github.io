import React from 'react';
import { Link } from 'react-router-dom';
import ProjectObject from './ProjectObject';

const Projects: React.FC = () => {
    return (
        <>
            <h1>Project Page</h1>
            <div className='projects'>
                <div>
                    <ProjectObject filename="/data/progcalc-react.json"/>
                </div>
                <div>
                    <ProjectObject filename="/data/todo-pern.json"/>
                </div>
                <div>
                    <ProjectObject filename="/data/dotfiles.json"/>
                </div>
                <div>
                    <ProjectObject filename="/data/langchain-demo.json"/>
                </div>
            </div>
        </>
    );
}

export default Projects;