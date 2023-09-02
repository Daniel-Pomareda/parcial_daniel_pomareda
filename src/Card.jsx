import React, { useState } from "react";

const Card = ({ nombre, color }) => {

    return (
    <div>
        <p>Hola {nombre}</p>
        <p>Su color elegido fue el {color}</p>
    </div>
    );
};

export default Card;