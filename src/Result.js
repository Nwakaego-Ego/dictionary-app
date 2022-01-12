import React from "react";
import Definition from "./Definition"
import Phonetics from "./Phonetics"

export default function Result(props) {
    console.log(props.result)
    console.log(props)
if ( props.result) {
    return (
        <div>
          <h3 className="text-capitalize">{props.result.word}</h3>
            {props.result.phonetics.map(function (phonetic, index ) {
                return (
                    <div key={index}>
                        <Phonetics phonetic={phonetic} />
                    </div>
                )
            })}
             
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

