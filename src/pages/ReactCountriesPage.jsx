import React, { useState } from "react";
import Countries from "../components/Countries";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";

import { allCountries } from "../data/countries";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState("Argentina");

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowerCase.length >= 3
      ? allCountries.filter(({ name }) => {
          return name.toLocaleLowerCase().includes(countryFilterLowerCase);
        })
      : allCountries;

  console.log(filteredCountries);

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
        <Countries>{filteredCountries}</Countries>
      </Main>
    </div>
  );
}
