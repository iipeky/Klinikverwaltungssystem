import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

function ListTermin() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postTerminlist, setTerminlist] = useState([]);
    const [patientlist, setPatientlist] = useState([]);
    const [doktorlist, setDoktorlist] = useState([]);

    useEffect(() => {
        fetch("/Termine/alleTermine")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTerminlist(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        fetch("/Patiente/allePatiente")
            .then((res) => res.json())
            .then(
                (result) => {
                    setPatientlist(result);
                },
                (error) => {
                    setError(error);
                }
            );
    }, []);
    useEffect(() => {
        fetch("/doktors/alleDoktors")
            .then((res) => res.json())
            .then(
                (result) => {
                    setDoktorlist(result);
                },
                (error) => {
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="lists">
                <div className="pageShape">
                    <h1 className="Page">Termine listen</h1>
                </div>
                {postTerminlist.map((termin) => {
                    const correspondingPatient = patientlist.find(
                        (patient) => patient.ausweisnummer === termin.patient.ausweisnummer
                    );
                    const correspondingDoktor = doktorlist.find(
                        (doktor) => doktor.doktor_id === termin.doktor.doktor_id
                    );
                    return (
                        <Post
                            zeit={termin.zeit}
                            terminDatum={termin.terminDatum}

                            patient={
                                correspondingPatient && (
                                    <div>
                                        {correspondingPatient.name} {correspondingPatient.nachname}{" "}
                                        {correspondingPatient.ausweisnummer}{" "}
                                        {correspondingPatient.phonenummer}
                                    </div>
                                )
                            }
                            doktor={
                                correspondingDoktor && (
                                    <div>
                                        {correspondingDoktor.doktor_name} {correspondingDoktor.doktor_nachname}{" "}
                                        {correspondingDoktor.abteilung}
                                    </div>
                                )
                            }
                        />
                    );
                })}
            </div>
        );
    }
}

export default ListTermin;
