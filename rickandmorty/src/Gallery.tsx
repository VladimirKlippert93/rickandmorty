import React from "react";
import Card from "./Card";
import {charakters} from "./RickAndMorty";

type GalleryProps= {
    character:{
    name: string,
    image: string,
    status: string
}[]
}

export default function Gallery(props:GalleryProps){
    const charList = props.character.map((charakters)=>{
        return <Card name={charakters.name} image={charakters.image} status={charakters.status} />
    })
    return (
        <div>
            {charList}
        </div>
    )
}