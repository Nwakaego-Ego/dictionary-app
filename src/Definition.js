import React from "react";

export default function Definition (props) {
    console.log(props.definition)
return (
    <div className="Definition">
        <p className="partofspeech">{props.definition.partOfSpeech}</p>
        {props.definition.definitions.map(function (meaning, index) {
            return (
                <div key={index}>
                     <p>{meaning.definition}</p>
                      <p><em>{meaning.example}</em></p>
                </div>
              
            )
        })}
       
    </div>
    
)
}

  