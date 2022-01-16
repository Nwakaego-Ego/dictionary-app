import React from "react";
import Definition from "./Definition"
import Phonetics from "./Phonetics"
import "./Result.css"

export default function Result(props) {
   
if ( props.result) {
    return (
        <div>
            <div className="middle">
               <div className="middle-1">
                <section>
                <h3 className="text-capitalize">{props.result.word}</h3>
                {props.result.phonetics.map(function (phonetic, index ) {
                return (
                    <div key={index}>
                        <Phonetics phonetic={phonetic} />
                    </div>
                
                )
            })}
             </section>
              </div>
             
             <div className="middle-2">
                {props.result.meanings.map(function (definition, index){
                    return (
                        <div key={index}>
                            <Definition definition={definition}/>
                        </div>
                    )
                })}
                </div>
          </div>
        </div>
    )
            } else {
                return null
            }
} 

