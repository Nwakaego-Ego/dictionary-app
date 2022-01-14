import axios from "axios";
import React, { useState } from "react";
import Result from "./Result"
import "./Dictionary.css"

export default function Dictionary (props) {
    const [search, setSearch] = useState(props.default);
    const [result, setResult] = useState("")
    const [loaded, setLoaded] = useState(false)

    function handleClick(response) {
        console.log(response.data[0])
        setResult(response.data[0])
    }
    
    function submitSearch () {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        axios.get(apiUrl).then(handleClick) 
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
                <section >                  
                     <form onSubmit={click}>
                         <h4>What is on your mind?</h4>
                         <input type="search" placeholder="search...." onChange={searchResult} defaultValue={props.default}/>
                     </form>   
                 </section>
                 </div>
                     <Result result={result}/>
               
            </div>
            
        )
    } else {
        load()
    }
}
