import { useState } from 'react';
import home2 from '../../../constants/Titlelogos/home2.png'
import './Widget.css';
import { General } from './General';
import { Display } from './Display';
export function Widget() {
    const [activeTab, setActiveTab] = useState('General');
    const getLineStyle = () => {
        switch (activeTab) {
            case 'General':
                return { width: '100px', left: '0' };
            case 'Display':
                return { width: '100px', left: '120px' };
            case 'Advanced':
                return { width: '100px', left: '240px' };
            default:
                return {};
        }
    };

    return <div>
        <div className="Widget-container">
            <nav className="breadcrumb">
                <span><img src={home2} alt="home2" style={{ "width": "25px", "height": "25px" }} /></span> / <span style={{
                    "color": "#999999",
                }}>Sample Project</span> / <span style={{
                    "color": " #7E22CE",
                    "fontWeight": "700",
                }}>Widget Configuration</span>
            </nav>

            <div className="widgetarea">
                <div>
                    <h1 className="widgettitle">Configuration</h1>
                </div>
                <div className="widgetsettings">
                    <span
                        className={activeTab === 'General' ? 'active' : ''}
                        onClick={() => setActiveTab('General')}
                    >
                        General
                    </span>
                    <span
                        className={activeTab === 'Display' ? 'active' : ''}
                        onClick={() => setActiveTab('Display')}
                    >
                        Display
                    </span>
                    <span
                        className={activeTab === 'Advanced' ? 'active' : ''}
                        onClick={() => setActiveTab('Advanced')}
                    >
                        Advanced
                    </span>

                   

                </div>
                <div className="line-container">
                        <div className="line" style={getLineStyle()}></div>
                    </div>
                  
                <div className="widget-content">
                        {activeTab === 'General' && (
                           <General/>
                        )}
                        {activeTab === 'Display' && (
                              <Display/>
                        )}
                        {activeTab === 'Advanced' && (
                            <div>Advanced Content</div>
                        )}
                    </div>


            </div>
        </div>
    </div>
}