import React, { useEffect } from "react";
import { useState } from "react";
import PostPatient from "../Post/PostPatient";

function ListPatient() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postPatientlist, setPatientlist] = useState([]);
    useEffect(() => {
        fetch("/Patiente/allePatiente")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPatientlist(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error</div>;
    } else if (!isLoaded) {
        return <div> Loading...</div>;
    } else {
        return (

            <div className="lists">
                <div className="pageShape">
                    <h1 className="Page"> Patiente listen</h1>
                </div>
                {
                    postPatientlist.map(patient => (
                        <PostPatient ausweisnummer={patient.ausweisnummer} name={patient.name} nachname={patient.nachname} phonenummer={patient.phonenummer}></PostPatient>
                    ))
                }
            </div >
        );
    }

}

export default ListPatient;