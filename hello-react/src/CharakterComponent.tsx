import React from "react";

import {charakters} from "./RickAndMorty";

type characterCardProps={
    characters: {
        name: string,
        img: string,
        status: string
    }[]
}

export default function CharakterComponent(props: characterCardProps){

         <div className={"Character-Box"}>
            <h3>{props.name}</h3>
            <img src={props.img} alt={"character pic"}/>
            <h3>{props.status}</h3>
        </div>
    }
}