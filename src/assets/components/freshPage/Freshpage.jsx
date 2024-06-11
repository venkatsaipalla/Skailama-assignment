import React, { useState } from 'react';
import pic from '../../../constants/Titlelogos/Group 16.png';
import plus from "../../../constants/Titlelogos/Plus.png";
import { Modal1 } from '../modal/Modal1';
import { useNavigate } from 'react-router';

export function FreshPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate=useNavigate();
    function showPopup() {
        setIsModalOpen(true);
    }

    const fetchProjects=()=>{
        navigate('/projects');

    }

    return (
        <div>
            <div style={{
                "width": "800px",
                "height": "600px",
                "position": "absolute",
                "top": "70px",
                "left": "400px"
            }}>
                <p style={{
                    "fontFamily": "'Roboto', sans-serif",
                    "fontWeight": "700",
                    "color": "#7E22CE",
                    "fontSize": "50px"
                }}>Create a New Project</p>
                <img src={pic} alt='pic' style={{
                    "width": "540px",
                    "height": "300px",
                    "position": "relative",
                    "top": "-40px"
                }} />
                <p style={{
                    "position": "relative",
                    "top": "-20px",
                    "fontFamily": "'Roboto', sans-serif",
                    "fontWeight": "400",
                    "color": "#838383",
                    "width": "700px"
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                </p>
                <button style={{
                    "backgroundColor": "black",
                    "width": "250px",
                    "position": "relative",
                    "top": "-10px",
                    "left":"250px",
                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "center",
                    
                }} 
                onClick={showPopup}>
                    <img src={plus} alt='Plus' style={{
                        "width": "30px",
                        "height": "30px"
                    }} />
                    <span style={{
                        "color": "white",
                        "fontSize": "20px",
                        "paddingLeft": "5px"
                    }}>Create New Project</span>
                </button>
            </div>
            {isModalOpen && (
                <>
                <Modal1  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} fetchprojects={fetchProjects} />
                </>

            )}
        </div>
    );
}
