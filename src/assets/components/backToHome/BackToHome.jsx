
import 'typeface-roboto';
import home from '../../../constants/Titlelogos/home.png'
import { useNavigate } from 'react-router';
export function BackToHome(){
    const navigate=useNavigate();

    function landingpage(){
        navigate('/');
    }
    return <div>
        <div style={{"width":"150px","height":"25px","borderRadius": "25px 25px 25px 25px" ,
        "border":" 2px  solid #999999 ",
        "backgroundColor":"#FFFFFF",
        
            "display":"flex", "justifyContent":"space-evenly", "alignItems": "center" ,"position":"absolute",
                 "top":"85px",
                 "left":"150px"}} onClick={landingpage} >
            <img src={home} alt="home" style={{"width":"25px",  "height":"25px"}} />
            <p style={{
                 "font-family": "'Roboto', sans-serif",
                 "padding-right":"2px",
                 "padding-left":"0px",
                 "textAlign":"end",
                 
                

            }}>Back to Home</p>
        </div>
    </div>
}