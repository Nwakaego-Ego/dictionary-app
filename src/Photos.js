import React from "react";
import "./Photos.css"


export default function Photo (props) {
    console.log(props.photos)

    if (props.photos) {
        return (
          
                <div className="row section">
                    {props.photos.map(function (pixels, index) {
                        return (
                            <div className="col-4" key={index}> 
                              
                                    <img src={pixels.src.landscape} alt={pixels.src.photographer} className="img-fluid"/>
                               
                            </div>
                        )
                    })}
            
            </div>
           
        )
    } else 
    return null;
   
}