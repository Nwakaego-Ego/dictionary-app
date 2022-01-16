import React from "react";
import "./Phonetics.css"

export default function Phonetics (props) {
   
    
if (props.phonetic) {
    return (
        
        <div className="phonetics ">
        
                 <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen : </a> 
                   {props.phonetic.text}
          
        </div>

    )
} else {
    return null;
}
   
}