import { useState } from "react";
const AddPatient = () => {
    const [name, setName] = useState("");
    const [nachname, setNachame] = useState("");
    const [ausweisnummer, setAusweisnummer] = useState("");
    const [phonenummer, setTelephonenummer] = useState("");
    const savePatient = () => {
        fetch("/Patiente/neuerPatient",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    nachname: nachname,
                    ausweisnummer: ausweisnummer,
                    phonenummer: phonenummer,
                }),

            })
            .then((res) => res.json())
            .catch((err) => console.log("error"))
    }
    const handlePatient = () => {
        savePatient();
    }

    return (
        <div className="AddPatient">
            <div className="pageShape">
                <h1 className="Page"> Patiente hinzufügen</h1>
            </div>
            <div className="shape">
                <form action="">
                    <label> Name: </label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label> Nachname: </label>
                    <input
                        type="text"
                        required
                        value={nachname}
                        onChange={(e) => setNachame(e.target.value)}
                    />
                    <label> Ausweisnummer: </label>
                    <input
                        type="text"
                        required
                        value={ausweisnummer}
                        onChange={(e) => setAusweisnummer(e.target.value)}
                    />
                    <label> Telephonenummer: </label>
                    <input
                        type="text"
                        required
                        value={phonenummer}
                        onChange={(e) => setTelephonenummer(e.target.value)}
                    />
                    <button onClick={handlePatient}>Add Patient</button>
                    <p>{name}</p>
                </form>
            </div>
        </div>
    );
}

export default AddPatient;