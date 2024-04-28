import React from 'react';

const ProjectList = ({ projects }) => {
    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
