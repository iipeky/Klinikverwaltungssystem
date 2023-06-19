import { useState } from "react";

const AddTermin = () => {
    const [ausweisnummer, setAusweisnummerTermin] = useState("");
    const [terminDatum, setDatum] = useState("");
    const [zeit, setZeit] = useState("");
    const [doktor_id, setDoktorname] = useState("");
    const saveTermin = () => {

        fetch("/Termine/neuerTermin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "terminDatum": terminDatum,
                    "zeit": zeit,
                    "patient": {
                        "ausweisnummer": ausweisnummer
                    },
                    "doktor": {
                        "doktor_id": doktor_id
                    }

                }),

            })
            .then((res) => res.json())
            .catch((err) => console.log("error"))
    }
    const handleTermin = () => {
        console.log(terminDatum, zeit, ausweisnummer, doktor_id);
        saveTermin();
    }
    return (
        <div className="AddTermin">
            <div className="pageShape">
                <h1 className="Page"> Termine erstellen</h1>
            </div>
            <div className="shape">
                <form action="">
                    <label > Geben Sie die Ausweisnummer von Patient ein: </label>
                    <input
                        type="text"
                        required
                        value={ausweisnummer}
                        onChange={(e) => setAusweisnummerTermin(e.target.value)}
                    />
                    <label > Wählen Sie den Datum aus: </label>
                    <input
                        type="text"
                        required
                        value={terminDatum}
                        onChange={(e) => setDatum(e.target.value)}
                    />
                    <label >Wählen Sie den Zeitabschnitt aus: </label>


                    <input
                        type="text"
                        required
                        value={zeit}
                        onChange={(e) => setZeit(e.target.value)} />

                    <label > Wählen Sie den Namen von Doktor aus: </label>
                    <input
                        type="text"
                        required
                        value={doktor_id}
                        onChange={(e) => setDoktorname(e.target.value)} />



                    <button onClick={handleTermin}>Add Termin</button>
                </form>
            </div>
        </div>
    );


}
export default AddTermin;