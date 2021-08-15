import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelApiKey = 
            "563492ad6f9170000100000167fc26d7e99049b0986d790fdf37e05f";
        let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization : `Bearer ${pexelApiKey}` }; 
        axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        search();
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h4>What word are you looking for?</h4>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="search" 
                        onChange={handleKeywordChange}
                        defaultValue={props.defaultKeyword}
                        />
                    </form>
                    <div className="hint">
                        Search for a word...like yoga, sunset, or plants!
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}