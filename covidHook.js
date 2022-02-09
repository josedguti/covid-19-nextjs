import { useState, useEffect } from 'react';

function covidHook(countryName) {
    const [cases, setCases] = useState('');

    useEffect(() => {
        const fetchCase = async () => {
          await fetch(
            `https://covid-api.mmediagroup.fr/v1/cases?country=${countryName}`
          )
            .then((res) => res.json())
            .then((data) => setCases(data.All));
        };
        fetchCase();
      }, [countryName]);
      return cases;
    }

export default covidHook;