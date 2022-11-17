import React from "react";
import HelloComponent from "./HelloComponent";

type GreetingsCompProp = {
    name: string
}
const vladi: GreetingsCompProp = {name: "Vladi"}
const martin: GreetingsCompProp = {name: "Martin"}
const sam: GreetingsCompProp = {name: "Sam"}
const marcell: GreetingsCompProp = {name: "Marcell"}

const people = [vladi,martin,sam,marcell]

export default function GreetingsComponent(){

         const ppl = people.map((people )=>{
            return <HelloComponent name={people.name}  />
        })
    return <div>{ppl}</div>
    }