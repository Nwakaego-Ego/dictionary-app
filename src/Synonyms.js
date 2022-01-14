import React from "react";
import "./Synonyms.css"

export default function Synonyms (props) {
    console.log(props.synonyms)
    let newSynonym = props.synonyms.slice(1, 6);
    if (props.synonyms){
        return (
            <div className="Synonyms">
                <section>
                <ul>
                    {newSynonym.map(function (synonym, index) {
                        return (
                            <span key={index}>
                               <li>{synonym}</li>
                            </span>
                        )
                    } )}
                </ul>
                </section>
            </div>
        ) 
    } else {
        return null;
    }

}

