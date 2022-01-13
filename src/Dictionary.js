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
                <form onSubmit={click}>
                     <input type="search" placeholder="search...." onChange={searchResult} defaultValue={props.default}/>
                </form>
                <Result result={result}/>
            </div>
            
        )
    } else {
        load()
    }
}
