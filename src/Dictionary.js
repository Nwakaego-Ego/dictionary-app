import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary () {
    const [search, setSearch] = useState("");

    function handleClick(response) {
        console.log(response.data[0])
    }

    function submitSearch(event) {
        event.preventDefault();
        // alert(`searching for the definition of ${search}`)

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        axios.get(apiUrl).then(handleClick)
      
    }
    
    function searchResult(event) {
        
        setSearch(event.target.value)
    }

    return (
        <form onSubmit={submitSearch}>
            <input type="search" placeholder="search...." onChange={searchResult}/>
        </form>
    )
}