import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary () {
    const [search, setSearch] = useState("");

    function submitSearch(event) {
        event.preventDefault();
        alert(`searching for the definition of ${search}`)
      
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