import {useEffect, useState} from "react";
import {Flight} from "../index"

export default function Flights(){

    let [flights, setFlights] = useState([]);

    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => {
                setFlights(value.filter(flight => flight.launch_year !== '2020'));
            });
    }, []);

    return(
        <div>
            <h2>SpaseX missions</h2>
            {flights.map((flight, index) => <Flight
                key={index}
                item={flight}
            />)}
        </div>
    )

}