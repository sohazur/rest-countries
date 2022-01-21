import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flags, region, capital, population } = props.country;
  return (
    <div className="country">
      <h4>{name.common}</h4>
      <img src={flags.svg} alt="" />
      <p>
        <small>Region: {region}</small>
      </p>
      <h5>Capital: {capital ? capital : "N/A"}</h5>
      <p>Population: {population ? population : "N/A"}</p>
    </div>
  );
};

export default Country;
