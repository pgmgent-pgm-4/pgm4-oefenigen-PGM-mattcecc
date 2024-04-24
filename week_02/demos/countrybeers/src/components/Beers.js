import React, { useEffect, useState } from "react";
import Beer from "./Beer";
import SelectCountry from "./SelectCountry";
import style from "./beers.module.css";

export default function Beers() {
  const [country, setCountry] = useState("italy");
  const [beers, setBeers] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const countries = [
    {
      value: "italy",
      name: "Italy",
    },
    {
      value: "belgium",
      name: "Belgium",
    },
    {
      value: "spain",
      name: "Spain",
    },
  ];

  console.log(process.env.REACT_APP_API_BEER_KEY);

  useEffect(() => {
    setIsLoading(true);
    setBeers([]);
    const url = "https://beers-list.p.rapidapi.com/beers/" + country;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_BEER_KEY,
        "X-RapidAPI-Host": "beers-list.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
        setIsLoading(false);
      });
  }, [country]);

  return (
    <div>
        <SelectCountry
            countries={countries}
            setCountry={setCountry}
            country={country}
        />
        <h1 className={style.error}>{country}</h1>
        {isloading && <p>... Loading</p>}
        {!isloading && (
            <>
                {beers.map((beer, i) => (
                    <Beer key={`beer-${i}`} beer={beer} />
                ))}
            </>
        )}
    </div>
);
}
