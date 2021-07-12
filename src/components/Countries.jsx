import React from "react";
//import Country from "./Country";

export default function Countries({ children
  //: countries = [], onCountryClick = null, visitedCountries = [] 
}) {
  return (
    <div className="border p-2">
      {children}
      
    </div>
  );
}
