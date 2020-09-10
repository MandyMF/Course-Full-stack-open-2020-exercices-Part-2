import React from 'react'


const CountryDetails = ({ country, ...props }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>Spoken languages</h2>
            <ul>
                {country.languages.map((lang, idx)=><li key={idx}> {lang.name} </li>)}
            </ul>
            <img alt="Can not show flag" src={country.flag} width={200} />
        </div>
    )

}

export default CountryDetails