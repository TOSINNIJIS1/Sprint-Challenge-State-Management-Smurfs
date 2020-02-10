import React from "react";

const card = props => {
    return (
        <div>
            Name: {props.smurf.name}
            Age: {props.smurf.age}
            Height: {props.smurf.height}
        </div>
    )
}

export default card