// ProjectObject.tsx
import React, { useState, useEffect } from 'react';
import { ProjectInterface } from '../interfaces/ProjectInterface';

interface ProjectObjectProps {
  filename: string;
}

const ProjectObject: React.FC<ProjectObjectProps> = ({ filename }) => {
  const [project, setProject] = useState<ProjectInterface | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(filename);
      const data: ProjectInterface = await response.json();
      setProject(data);
    };

    fetchData();
  }, [filename]);

  return (
    <>
      {project && (
        <>
          <h2 className='projtitle' >{project.name}</h2>
          <div className='projectobject'>
          <img className='projimg' src={project.imageUrl} alt={project.name} />
            
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(', ')}</p>
            
            <p>
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
            <p>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectObject;
