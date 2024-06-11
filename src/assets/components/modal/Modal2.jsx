import React, { useState } from 'react';
import './Modal2.css';

function Modal2({ onClose, onSubmit }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        onSubmit({ name, description });
        setName('');
        setDescription('');
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Upload</h2>
                <div className='namediv'>
                <label className='modaltitle'>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='descriptiondiv'>
                <label className='modaltitle'>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="modal-buttons">
                    <button onClick={handleSubmit} className='uploadbutton'>Upload</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Modal2;
