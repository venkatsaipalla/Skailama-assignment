import './settings.css'
import { useState } from 'react'
import home2 from '../../../constants/Titlelogos/home2.png'
import profile from '../../../constants/Titlelogos/profile.png'

export function Settings() {
    const [Name, setName] = useState('');
    
    return <div>
        <div className="Widget-container">
            <nav className="breadcrumb">
                <span><img src={home2} alt="home2" style={{ "width": "25px", "height": "25px" }} /></span> / <span style={{
                    "color": "#999999",
                }}>Account Settings</span>
            </nav>

            <div className="widgetarea">
                <h1 className="widgettitle">Account Settings</h1>
            </div>
            <div className='accountprofile'>
                <div>

                    <img src={profile} alt='profile' style={{"width":"100px","height":"100px", "position":"relative","left":"-400px"}} />
                </div>
                <div style={{
                    "position":"relative",
                    "top":"-90px",
                    "width":"200px",
                    "left":"120px",
               
                    "display":"flex",
                    "flexDirection":"column",
                    
                }}>
                    <label style={{"textAlign":"start","fontFamily":"'Roboto',sans-serif",
                        "fontSize":"20px","fontWeight":"700"}}>User Name</label>
                    <input value={Name} placeholder='alphauser' style={{
                        "height":"25px","borderRadius":"5px","padding":"2px",
                        "border":"1px solid #999999"
                    }}  onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{
                    "position":"relative",
                    "top":"-150px",
                    "width":"200px",
                    "left":"440px",
                    
               
                    "display":"flex",
                    "flexDirection":"column",
                    
                }}>
                    <label style={{"textAlign":"start","fontFamily":"'Roboto',sans-serif",
                        "fontSize":"20px","fontWeight":"700"
                    }}>Email</label>
                    <input placeholder='alphauser@gmail.com'  disabled  style={{
                        "height":"25px","borderRadius":"5px","padding":"2px",
                        "border":"1px solid #999999" ,"cursor":"not-allowed"}}/>
                </div>
                <div className='subscription'>
                    <p>Subscriptions</p>
                    <div className='subscriptioncontent'>
                        <p>You are currently on the <u> Ques AI Basic Plan!</u></p>
                        <button>Upgrade</button>
                    </div>
                    <p className='cancel'><u>Cancel subscription</u></p>
                </div>
            </div>
        </div>
    </div>
}