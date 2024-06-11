
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Modal1({setIsModalOpen, fetchprojects}){
    const [projectName, setProjectName] = useState('');
    const navigate=useNavigate();
    

    function hidePopup() {
        setIsModalOpen(false);
    }

    const  saveProject=async ()=> {
        // Handle save logic here
        console.log('Project saved:', projectName);
       
 
        try {
            const newProject = { name: projectName };
            await axios.post('https://backend-vzgu.onrender.com/projects', newProject);
            setProjectName('');
            setIsModalOpen(false);
            await fetchprojects();
            navigate('/projects');
        } catch (error) {
            console.error('Error saving project:', error);
        }

    }
    return  <div>
    <div style={{
        "position": "fixed",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "backgroundColor":"#D9D9D9",
        "backgroundColor": "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        "zIndex": "0"
    }}></div>
    <div style={{
        "position": "fixed",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
      
        "zIndex": "1" // Higher zIndex to be above the overlay
    }}>
        <div style={{
            "backgroundColor": "white",
            "padding": "20px",
            "borderRadius": "8px",
            "width": "500px",
           
        }}>
            <h2 style={{
                "fontFamily": "'Roboto', sans-serif",
                "color": "black",
                "textAlign": "start",
                "margin":"1px auto 15px",
            }}>Create Project</h2>
            <label style={{
                "display": "block",
               
                "marginBottom": "10px",
                "fontFamily": "'Roboto', sans-serif",
                "fontWeight": "300",
                "textAlign": "start"
            }}>
                Enter the Project name:
                <input 
                    type="text" 
                    value={projectName} 
                    onChange={(e) => setProjectName(e.target.value)} 
                    style={{
                        "display": "block",
                        "width": "90%",
                        "padding": "10px",
                        "marginTop": "5px",
                        "fontSize": "16px",
                        "border": "1px solid #ccc",
                        "borderRadius": "4px"
                    }}
                />
            </label>
            <div style={{
                "display": "flex",
                "justifyContent":"flex-end",
                "marginRight": "20px"
            }}>
                <button onClick={hidePopup} style={{
                    "padding": "10px 20px",
                    
                    "color": "red",
                    "border": "none",
                    "borderRadius": "4px",
                    "cursor": "pointer",
                    "marginRight":"5px"
                }}>Cancel</button>
                <button onClick={saveProject} style={{
                    "padding": "10px 20px",
                    "backgroundColor": "#7E22CE",
                    "color": "white",
                    "border": "none",
                    "borderRadius": "4px",
                    "cursor": "pointer"
                }}>create</button>
            </div>
        </div>
    </div>
</div>
}
