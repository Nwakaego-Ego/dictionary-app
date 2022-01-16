import React from "react";
import "./Synonyms.css"

export default function Synonyms (props) {
   
    let newSynonym = props.synonyms.slice(1, 4);
    if (props.synonyms){
        return (
            <div className="Synonyms section">
            
                {/* <strong>Synonyms:</strong>  */}
                <ul>
                    {newSynonym.map(function (synonym, index) {
                        return (
                            <span key={index}>
                              
                              <li>{synonym}</li>
                            </span>
                        )
                    } )}
                </ul>
               
            </div>
        ) 
    } else {
        return null;
    }

}

