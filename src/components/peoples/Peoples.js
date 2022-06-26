import {useEffect, useState} from "react";
import {People} from "../index"

export default function Peoples(){

    let [peoples, setPeoples] = useState([]);
    let [people, setPeople] = useState([]);

    useEffect(()=>{
        fetch('https://swapi.dev/api/people/')
            .then(value => value.json())
            .then(value => {
                setPeoples(value.results);
                console.log(value);
            });
    }, []);
    const infoPeople = (item) => {
        setPeople(item);
        console.log('sfsd')
    };

    return(
        <div>
            <h2>star wars</h2>
            {peoples.map((people, index)=>
            <People
            key={index}
            item={people}
            infoPeople={infoPeople}
            />)}
        </div>
    );
}