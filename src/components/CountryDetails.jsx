import React from 'react'
import {Link} from 'react-router-dom'
import { formatNumber } from './helpers/formatNumber'

export const CountryDetails = ({
    src,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    borders,
    languages
}) => {
    return (
        <div className="country-data">
        <img src={src} alt="" />
        <div className="info">
            <h2>{name}</h2>
            <div className="rows">
                <div className="col">
                    <p><span>Native name:</span> {nativeName}</p>
                    <p><span>Population:</span> {formatNumber(population)}</p>
                    <p><span>Region:</span> {region}</p>
                    <p><span>Sub region:</span> {subregion}</p>
                    <p><span>Capital:</span> {capital}</p>
                </div>
                <div className="col">
                    <p><span>Top Level Domain:</span> {topLevelDomain}</p>
                    <p><span>Currencies:</span> {currencies.map(c => c.name)}</p>
                    <p><span>Languages:</span> {languages.map(l => l.name).join(", ")} </p>
                </div>
            </div>
            {borders && (borders.length > 0) && 
                <div className="border-countries">
                    <p>Border Countries: </p>
                    {borders.map(bc => (
                        <Link to={`/frontend-mentor/rest-countries/country/${bc.id}`} >{bc.name}</Link>
                    ))}
                </div>
            }
        </div>
    </div>
    )
}
