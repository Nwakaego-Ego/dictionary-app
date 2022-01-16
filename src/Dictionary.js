import axios from "axios";
import React, { useState } from "react";
import Result from "./Result"
import "./Dictionary.css"
import Photos from "./Photos"

export default function Dictionary (props) {
    const [search, setSearch] = useState(props.default);
    const [result, setResult] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [photos, setPhoto] = useState(null)

    function handleClick(response) {
        
        setResult(response.data[0])
    }

    function photoHandle (response) {
        console.log(response.data)
        setPhoto(response.data.photos)
    }
    
    function submitSearch () {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        axios.get(apiUrl).then(handleClick) 

       
        let apiPexelKey = "563492ad6f917000010000013b8721441f574ebcb8b3351a6ce0bc23"; 
        let apiPexelUrl =   `https://api.pexels.com/v1/search?query=${search}&per_page=9`;
        let headers = { Authorization: `Bearer ${apiPexelKey}` };
        axios.get(apiPexelUrl, {headers : headers }).then(photoHandle);
    }

    function click (event) {
        event.preventDefault();
        submitSearch();
    }

    function load () {
        setLoaded(true);
        submitSearch();
    }

    
    function searchResult(event) {
         setSearch(event.target.value)
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                  <div className="search">
                <div className="section search" >                  
                     <form onSubmit={click}>
                         <h4>What is on your mind?</h4>
                         <div className="row">
                             <div className="col-9 ">
                                 <input type="search" className="searchButton" placeholder="search...." onChange={searchResult} defaultValue={props.default}/>
                             </div>
                             <div className="col-3 submit">
                                <input type="submit" value="Search" className="submitButton" onSubmit={click}/>
                             </div>
                         </div>
                         
                     </form>   
                 </div>
                 </div>
                     <Result result={result}/>   
                     <Photos  photos={photos} />  
            </div>
            
        )
    } else {
        load()
    }
}
