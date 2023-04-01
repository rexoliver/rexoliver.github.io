import React from 'react';
import { Link } from 'react-router-dom';
import ProjectObject from './ProjectObject';

const Projects: React.FC = () => {
    return (
        <>
            <h1>Project Page</h1>
            <div>
                <ProjectObject filename="../../data/progcalc-react.json"/>
            </div>
        </>
    );
}

export default Projects;