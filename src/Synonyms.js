import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <ul className="Synonims">
            {props.synonyms.map(function (synonyms, index) {
                return <li key={index}>{synonyms}</li>;
            })}
            </ul>
        );
    } else {
        return null;
    }
}