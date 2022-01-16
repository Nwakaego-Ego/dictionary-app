import React from "react";
import Synonyms from "./Synonyms";

export default function Definition (props) {
    
   
return (
    <div className="Definition">
        <section>
             <p className="partofspeech">{props.definition.partOfSpeech}</p> 
              {props.definition.definitions[0].definition}
             
           
             <p><em>{props.definition.definitions[0].example}</em></p>

             </section>
     
             <Synonyms synonyms={props.definition.definitions[0].synonyms} />
       
    </div>
    
)
}

  