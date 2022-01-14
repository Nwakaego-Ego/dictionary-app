import React from "react";
import Synonyms from "./Synonyms";

export default function Definition (props) {
    
    console.log(props)
return (
    <div className="Definition">
        <section>
             <p className="partofspeech">{props.definition.partOfSpeech}</p> 
              {props.definition.definitions[0].definition}
             <p><strong>Example: </strong><em>{props.definition.definitions[0].example}</em></p>
        </section>
             <Synonyms synonyms={props.definition.definitions[0].synonyms} />
       

        {/* {props.definition.definitions.map(function (meaning, index) {
            return (
                <div key={index}>
                     <p>{meaning.definition}</p>
                      <p><strong>Example: </strong><em>{meaning.example}</em></p>
                      <Synonyms synonyms={meaning.synonyms} />
                      
                </div>
              
            )
        })} */}
       
    </div>
    
)
}

  