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
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(', ')}</p>
          <img src={project.imageUrl} alt={project.name} />
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
        </>
      )}
    </>
  );
};

export default ProjectObject;
