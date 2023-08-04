import React from "react";
import FormCreateWork from "../FormCreatedWork/FromCreatedWork";
import WorkPublication from "../WorkPublications/WorkPublications";

export default function Home() {
    return (
        <div>
          <h1>ESTOY EN EL HOME</h1>
          <FormCreateWork/>
          <WorkPublication/>
        </div>
      );
}