import React from 'react';
import GreetingsComponent from "./GreetingsComponent";
type WelcomePerson={
    name:string
}


//export= Die Komponente soll nach außen hin sichtbar sein
export default function HelloComponent(props:WelcomePerson) {

    return (
            <div>
                {/*
            <h1>Hallo meine schöne sonnige Welt</h1>

             Mit {} lässt sich JS durchführen und man erkennt dynamische Werte
            */}
                <p>Hallo {props.name}, willkommen auf dieser Seite!</p>
        </div>
    );
}

