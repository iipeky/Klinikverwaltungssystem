import React from "react";

function PostPatient(props) {
    const { name, nachname, ausweisnummer, phonenummer } = props;
    return (
        <div className="postContainer">
            {ausweisnummer} {name} {nachname} {phonenummer}
        </div>
    );
}

export default PostPatient;