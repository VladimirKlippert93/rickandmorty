import React from "react";
import {charakters} from "./RickAndMorty";

type cardProps= {
            name: string,
            image: string,
            status: string
}

export default function Card(props: cardProps){
return(
        <div className={"Card"}>
            <h3>{props.name}</h3>
            <img src={props.image}/>
            <p>{props.status}</p>
        </div>
)
}