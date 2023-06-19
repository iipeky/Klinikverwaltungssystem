import React from "react";

function Post(props) {
    const { zeit, terminDatum, patient, doktor } = props;
    //const [patient] = patientinfo;
    return (
        <div className="postContainer">
            {zeit} {terminDatum}
            {patient}
            {doktor}
        </div>
    )
}

export default Post;