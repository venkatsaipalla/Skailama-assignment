import React, { useState, useEffect } from 'react';
import './Upload.css';
import axios from 'axios';
import { format } from 'date-fns';
import Modal2 from '../modal/Modal2';
import { useNavigate } from 'react-router';
import home from '../../../constants/Titlelogos/home2.png'
import { Widget } from '../widget/Widget';

export function Upload({ projectId }) {
    console.log("in update", projectId);
    const [subprojects, setSubprojects] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        fetchSubprojects(projectId);
    }, [projectId]);

    const fetchSubprojects = async (projectId) => {
        try {
            console.log(typeof projectId);
            const response = await axios.get(`https://backend-vzgu.onrender.com/projects/${projectId}/subprojects`);
            setSubprojects(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching subprojects:', error);
        }
    };

    const editpage=(index,projectId)=>{
        console.log(projectId,"            ",index);
            navigate(`/projects/${projectId}/${index}/edit`)
    }

    const renderSubprojects = () => {
        return subprojects.map((subproject, index) => (
            <tr key={index} >
                {console.log(subproject)}
                <td>{subproject.name}</td>
                <td>{format(new Date(subproject.createdAt), 'dd MMM yy | HH:mm')}</td>
                <td>Done</td>
                <td className='editdelete'>
                    <button className="edit-button" onClick={()=>editpage(index,projectId)}>Edit</button>
                    <button className="delete-button">Delete</button>
                </td>
            </tr>
        ));
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalSubmit = async (formData) => {
        try {
            console.log("formdata", formData);
            const senddata = {
                name: formData.name,
                description: formData.description
            };
            await axios.post(`https://backend-vzgu.onrender.com/projects/${projectId}/subprojects`, senddata);
            await fetchSubprojects(projectId);
            setShowModal(false);
        } catch (error) {
            console.error('Error uploading subproject:', error);
        }
    };

    return (
        <div className="upload-container">
            <nav className="breadcrumb">
                <span><img src={home} alt='home' style={{
                    width:"30px",
                }
                }/></span> / <span>Sample Project</span> / <span>Upload</span>
            </nav>
           
            <div className="upload-buttons" onClick={() => setShowModal(true)}>
                <button className="upload-button youtube">Upload Youtube Video</button>
                <button className="upload-button spotify">Upload Spotify Podcast</button>
                <button className="upload-button rss">Upload from RSS Feed</button>
                <button className="upload-button youtube">Upload Youtube Video</button>
                <button className="upload-button spotify">Upload Spotify Podcast</button>
                <button className="upload-button rss">Upload from RSS Feed</button>
            </div>
            <div className="subprojects-table">
                <table className='maintable'>
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Upload Date & Time</th>
                            <th>Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderSubprojects()}
                    </tbody>
                </table>
            </div>
            {showModal && <Modal2 onClose={handleModalClose} onSubmit={handleModalSubmit} />}
        </div>
    );
}
