import { useState } from "react"
import './General.css'

export function General(){
    const [msg,setmsg]=useState('')
    return <div  className="general-container">
        <div className="chatbot inputfirst">
        <label className="namefirst" >Chatbot Name</label>
        <input  value={msg} className="input1 "></input>
        <p className="content ">Lorem ipsum dolor sitsxer citationem!</p>

        </div>
       <div className="chatbot">
       <label >Welcome Message</label>
        <input value={msg}  className="input1"></input>
        <p className="content">Lorem ipsum dolor sitsxer citationem!</p>

       </div>
       <div  className="chatbot">
         <label>Input Placeholder</label>
        <input  value={msg}  className="input1"></input>
        <p className="content">Lorem ipsum dolor sitsxer citationem!</p>

       </div>
      
       
    </div>
}