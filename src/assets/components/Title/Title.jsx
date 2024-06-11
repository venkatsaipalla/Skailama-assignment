import logo from '../../../constants/Titlelogos/directright.png'
import brand from '../../../constants/Titlelogos/LAMA..png'
import icon from '../../../constants/Titlelogos/Icon.png'
import notify from '../../../constants/Titlelogos/notifications.png'



// C:\Users\arunk\Desktop\new folder\skailama\LamaDemo\src\constants\Titlelogos\directright.png
export function Title() {
    return <div >
        <div>
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
                    "position":"absolute",
                    "top": "20px",
                    "left": "89.63px",
                    "gap": "0px",
                    "opacity": "0px"

                }
            } />

        </div>
       
       <div style={{"position":"absolute","top":"30px","right":"40px",
       }}>
        <img  src={icon} alt="icon" style={{"width":"30px",
            "height":"30px","padding":"3px"
        }}/>
        <img src={notify} alt="notify" style={{"width":"30px",
            "height":"30px","padding":"3px"
        }}/>

       </div>

    </div>
}