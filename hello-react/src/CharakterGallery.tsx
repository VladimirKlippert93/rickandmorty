import React from "react";
import {charakters} from "./RickAndMorty";
import CharakterComponent from "./CharakterComponent";

type characterGalleryProps= {
    characters: {
        name: string,
        image: string,
        status: string
    }[]
}
const charList = charakters
