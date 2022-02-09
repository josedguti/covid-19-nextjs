import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import covidHook from "../covidHook";


export default function Home() {
  const countryRef = useRef(null);
 
  const [countryName, setCountryName] = useState("US")

  const cases = covidHook(countryName);

  const getCases = (e) => {
    e.preventDefault();
    let value = countryRef.current.value;
    value = value.toLowerCase();
    value = value.charAt(0).toUpperCase() + value.slice(1);
    setCountryName(value);
    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <h1>COVID-19</h1>
      <h3>{cases.confirmed}</h3>
      <h3>{cases.population}</h3>
      <h3>{cases.deaths}</h3>
      <h3>{cases.capital_city}</h3>

      <form onSubmit={getCases}>
        <input placeholder="Country Name" ref={countryRef} />
        <button type="submit">get cases</button>
      </form>
    </div>
  );
}
