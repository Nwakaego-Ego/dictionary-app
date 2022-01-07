import React from "react";

export default function Result(props) {
    console.log(props.result)
    return (
        <div>
            <h2>{props.result.word}</h2>
                {props.result.meanings.map(function (definition, index){
                    return (
                        <div>
                            {definition.definitions[0]}
                        </div>
                      
                    )
                })}
        </div>
    )
}