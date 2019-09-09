import React from "react";
import NameForm from "./controlled-forms";
import Reservation from "./reservation";
import FileInput from "./file-input";

export const FormExample = () => (
  <fieldset>
    <legend>Forms examples</legend>
    <NameForm />
    <Reservation />
    <FileInput />
  </fieldset>
);
