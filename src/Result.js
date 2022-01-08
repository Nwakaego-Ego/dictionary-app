import React from "react";
import Definition from "./Definition"

export default function Result(props) {
    console.log(props.result)
if ( props.result) {
    return (
        <div>
          <h3 className="text-capitalize">{props.result.word}</h3>
                {props.result.meanings.map(function (definition, index){
                    return (
                        <div key={index}>
                            <Definition definition={definition}/>
                        </div>
                    )
                })}
        </div>
    )
            } else {
                return null
            }
} 

