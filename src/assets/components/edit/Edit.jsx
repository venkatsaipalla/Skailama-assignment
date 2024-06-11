import axios from "axios";
import { useEffect, useState } from "react";
import './Edit.css'
import home2 from'../../../constants/Titlelogos/home2.png'
import mode from '../../../constants/Titlelogos/mode.png'

export function Edit({ projectId, index }) {
    const [description, setDescription] = useState('');
    const [editMode, setEditMode] = useState(false); // State to track edit mode

    useEffect(() => {
        fetchSubprojectsByIndex(projectId, index);
    }, []);

    const fetchSubprojectsByIndex = async (projectId, index) => {
        try {
            const response = await axios.get(`https://backend-vzgu.onrender.com/projects/${projectId}/subprojects/${index}`);
            // setDescription(response.data.data.description);
            console.log("jfgfcfcfcf",response.data.data.description);
            setDescription(response.data.data.description);
        } catch (error) {
            console.log('Error fetching the description', error);
        }
    }

    const savenewdescription=async()=>{
        try{
            await axios.put(`https://backend-vzgu.onrender.com/projects/${projectId}/subprojects/${index}`, {
                description: description
            });
            setEditMode(false);

        }catch(err){
            console.log('Error fetching the description', error);
        }
    }
    const handleEditClick = () => {
        setEditMode(true); // Activate edit mode when the edit button is clicked
    };

    const handleSaveClick = () => {
        // Send updated description to server and handle saving logic here
        setEditMode(false); // Turn off edit mode after saving
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    return (
        <div className="Edit-container">
            <nav className="breadcrumb">
                <span><img src={home2} alt="home2" style={{"width":"25px","height":"25px"}}/></span> / <span style={{"color":"#999999",
}}>Sample Project</span> / <span style={{"color":" #7E22CE",
                    "fontWeight":"700",
                }}>Transcript</span>
            </nav>
            <div className="editarea">
            <h1 className="edittitle">Edit Transcript</h1>

            {editMode && (<div>
                <button className="discard" onClick={handleSaveClick}>Discard </button>
                <button className="save" onClick={savenewdescription}>Save & exit</button>
            </div>)}
            </div>
           
            {editMode ? (
                <div className="editmodeon">
                   
                    <button className="editmodebutton" onClick={handleSaveClick}>
                    <img src={mode} alt="mode" style={{"width":"15px","height":"15px","backgroundColor":"#3C3C3C"}} />edit mode</button>
                    <p className="speaker">Speaker</p>
                    <textarea  className="textarea"value={description} onChange={handleDescriptionChange} />
                </div>
            ) : (
                <div className="editmodeoff">
                    <button className="editmodebutton" onClick={handleEditClick}>
                    <img src={mode} alt="mode" style={{"width":"15px","height":"15px","backgroundColor":"#3C3C3C"}} />edit mode</button>
                    <p className="speaker">Speaker</p>
                    <div className="des">{description}</div>
                </div>
            )}
        </div>
    );
}
