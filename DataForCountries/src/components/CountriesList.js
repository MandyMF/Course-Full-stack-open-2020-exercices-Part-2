import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const CountriesList = ({ countries, ...props }) => {

    if (countries.length === 1) {
        return (
            <div>
                <CountryDetails country={countries[0]}/>
            </div>
        )
    }
    else {
        return (
            <div>
                {countries.map((country) => <Country key={country.numericCode} country={country} changeFilterFunction={props.changeFilterFunction}/>)}
            </div>
        )
    }
}

export default CountriesList