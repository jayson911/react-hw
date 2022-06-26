import {useEffect, useState} from "react";
import {People} from "../index"

export default function Peoples(){

    let [peoples, setPeoples] = useState([]);
    let [people, setPeople] = useState([]);

    useEffect(()=>{
        fetch('https://swapi.dev/api/people')
            .then(value => value.json())
            .then(value => {
                setPeoples(value);
            });
    }, []);

    const infoPeople = (item) => {
        setPeople(item);
    };

    return(
        <div className={'peoples'}>
            {peoples.map((people, index)=>
            <People
            key={index}
            item={people}
            infoPeople={infoPeople}
            />)}
            {<div>name: {people.name}</div>}
        </div>
    )
}