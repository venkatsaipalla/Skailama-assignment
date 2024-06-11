import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal1 } from '../modal/Modal1';
import { Shimmer } from '../shimmer/Shimmer';  // Adjust the import path as necessary
import '../allProjects/AllProjects.css';
import plus from '../../../constants/Titlelogos/Plus.png';
import { Upload } from './Upload';
import { useNavigate } from 'react-router';

export function AllProjects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate=useNavigate();
 

   

    useEffect(() => {
        fetchProjects();
   
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('https://backend-vzgu.onrender.com/projects');
            console.log("data is", response.data.data);
            setProjects(response.data.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const showPopup = () => {
        setIsModalOpen(true);
    };

    const hidePopup = () => {
        setIsModalOpen(false);
    };
    const handleProjectClick = (projectId) => {
        console.log("in project" , projectId)
       
        navigate(`/projects/${projectId}/upload`);
        console.log(projectId);
    };

    

    return (
        <div className="container">
            <div className="header">
            <h1 className='heading'>Projects</h1>
                <button onClick={showPopup} className="create-project-btn">
                <img src={plus} alt="Plus" className="plus-icon" />
                    <span>Create New Project</span>    
                </button>
            </div>
          
            <div className="projects-container">
                {isLoading ? (
                    <>
                        <Shimmer />
                        <Shimmer />
                        <Shimmer />
                    </>
                ) : (
                    projects.map((project) => (
                        <div key={project._id} className="project-card"  onClick={() => handleProjectClick(project._id)}>
                            <div className="project-icon">SP</div>
                            <div className="project-details">
                                <div className='project-section'>
                                <h3 className='project-title'>{project.name}</h3>
                                <p className='project-episode'>4 Episodes</p>
                                </div>
                                <p className='project-update'>Last edited a week ago</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {isModalOpen && (
                <>
        fetchProjects
                <Modal1  setIsModalOpen={setIsModalOpen}  fetchprojects={ fetchProjects}   />
                </>

            )}
            
        </div>
    );
}
