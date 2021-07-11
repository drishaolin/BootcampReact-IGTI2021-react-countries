import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";

import { allCountries } from "../data/countries";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState("Argentina");

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  return (
    <div>
      <Header>Projeto React Countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe nome do país (mín 3 caracteres):"
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        />
      </Main>
    </div>
  );
}
