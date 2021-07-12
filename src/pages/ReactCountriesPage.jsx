import React, { useState } from "react";
import Countries from "../components/Countries";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";

import Country from "../components/Country";
import { allCountries } from "../data/countries";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  function toggleVisitedCountries(countryId) {
    let newVisitedCountries = [...visitedCountries];
    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

    //verifies if the item exists, if not, push it in the array:
    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter((visitedCountryId) => {
        return visitedCountryId !== countryId;
      });
    } else {
      newVisitedCountries.push(countryId);
    }

    setVisitedCountries(newVisitedCountries);
  }

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowerCase.length >= 3
      ? allCountries.filter(({ name }) => {
          return name.toLocaleLowerCase().includes(countryFilterLowerCase);
        })
      : allCountries;

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
       

        <Countries>
          <h2 className="text-center font-semibold">{filteredCountries.length} país(es)</h2>
          <h3 className="text-center font-semibold text-sm">{visitedCountries.length} país(es) visitados</h3>
          {filteredCountries.map((country) => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;
            return (
              <Country isVisited={isVisited} onCountryClick={toggleVisitedCountries} key={country.id}>
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </div>
  );
}
