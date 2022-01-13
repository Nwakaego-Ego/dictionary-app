import React from "react";

export default function Synonyms (props) {
    console.log(props.synonyms)
    let newSynonym = props.synonyms.slice(1, 6);
    if (props.synonyms){
        return (
            <div>
                <ul>
                    {newSynonym.map(function (synonym, index) {
                        return (
                            <div key={index}>
                               <li>{synonym}</li>
                            </div>
                        )
                    } )}
                </ul>
            </div>
        ) 
    } else {
        return null;
    }

}

