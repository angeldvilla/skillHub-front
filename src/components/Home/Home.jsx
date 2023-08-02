import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>ESTOY EN EL HOME</h1>

            <Link to = "/CreateWork">
            <button> Publicar un trabajo </button>
            </Link>
        </div>
    )
}