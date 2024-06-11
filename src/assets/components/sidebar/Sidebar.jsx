import { useState } from 'react'
import logo from '../../../constants/Titlelogos/directright.png'
import brand from '../../../constants/Titlelogos/LAMA..png'
import './Sidebar.css'
import { useNavigate } from 'react-router';
import settings from '../../../constants/Titlelogos/settings.png'

export function Sidebar({ projectId }) {
    console.log("in sidebar", projectId);
    const [activebutton, setactivebutton] = useState(0);
    const navigate = useNavigate();
    function handleButtonClick(index, projectId) {
        console.log(index, typeof index);
        setactivebutton(index);
        if (index == 0) {
            navigate(`/projects/${projectId}/${index}/edit`)
        }
        if (index === 1) {
            console.log("iin widget")
            navigate(`/projects/${projectId}/${index}/widget`);
        }
    }

    function showsettings(){
        console.log("in settings")
        navigate('/settings')
    }
    return <div className='sidebar-container'>
        <div className='imageclass'>
            <img src={logo} alt="logo" style={{
                "width": "40px",
                "height": "40px",
                "position": "absolute",
                "top": "20px",
                "left": "30px"
            }} />
            <img src={brand} alt="brand name"
                style={
                    {
                        "width": "80px",
                        "height": "35px",
                        "position": "absolute",
                        "top": "20px",
                        "left": "89.63px",
                        "gap": "0px",
                        "opacity": "0px"

                    }
                } />
        </div>
        <div className='allbuttons'>
            {['Projects', 'Widget Configuration', 'Deployment', 'Pricing'].map((label, index) => (
                <button
                    key={index}
                    className={`button ${activebutton === index ? 'active' : ''}`}
                    onClick={() => handleButtonClick(index, projectId)}
                >
                    {index + 1}. {label}
                </button>
            ))}
        </div>



        <button className='settingsbutton'   onClick={showsettings}>
            <img src={settings} alt='settings icon' className='imgbutton' />Settings</button>

    </div>



}