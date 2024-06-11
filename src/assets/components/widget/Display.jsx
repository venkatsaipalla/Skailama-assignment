import React, { useState } from 'react';
import './Display.css';
import upload from '../../../constants/Titlelogos/upload.png';

export function Display() {
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="display-container">
            <div className="display-section">
                <div className='label'>
                    <label>
                        Primary Color
                        <input type="text" placeholder="#7BD568" className='input' />
                    </label>
                    <div className='primarycolor'></div>
                </div>

                <div className='label'>
                    <label>
                        Font Color
                        <input type="text" placeholder="#3C3C3C" className='input' />
                    </label>
                    <div className='fontcolor'></div>
                </div>
            </div>

            <div className="display-section">
                <label>
                    Font Size (in px)
                    <input type="number" placeholder="25" className='input' />
                </label>
                <label  style={{"position":"relative","left":"-50px"}}>
                    Chat Height (in % of total screen)
                    <input type="text" placeholder="Lorem ipsum" className='input' />
                </label>
            </div>

            <div className="toggle-switch">
                <div className='toggletitle'>Show Sources</div>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={handleToggle}
                    />
                    <span className="slider"></span>
                </label>
                
            </div>

            <hr style={{ width: "950px", border: "solid 1px #DADADA" }} />

            <h3 className='chattitle'>Chat Icon</h3>
            <div className="display-section2">
                <div className='chaticon'>
                    <label className='label2'>
                        Chat Icon Size
                        <select>
                            <option>Small (48x48 px)</option>
                            <option>Medium (64x64 px)</option>
                            <option>Large (96x96 px)</option>
                        </select>
                    </label>
                    <label className='label2'>
                        Position on Screen
                        <select>
                            <option>Bottom Right</option>
                            <option>Bottom Left</option>
                            <option>Top Right</option>
                            <option>Top Left</option>
                        </select>
                    </label>
                </div>
                <div className="chaticon">
                    <label className='label2'>
                        Distance from Bottom (in px)
                        <input type="number" placeholder="20" className='input2' />
                    </label>
                    <label className='label2'>
                        Horizontal Distance (in px)
                        <input type="number" placeholder="20" className='input2' />
                    </label>
                </div>
            </div>

            <div className="display-section3">
                <h3 className='chattitle'>Bot Icon</h3>
                <div className='botsection'>
                    <div className='circle'></div>
                    <div className='upload-container'>
                        <div className='upload'>
                            <p>Upload Image</p>
                            <img src={upload} alt="upload" className='img' />
                        </div>
                        <span className='rec'>Recommended Size: 48x48px</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Display;
