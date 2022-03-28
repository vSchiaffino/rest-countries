import React from 'react'
import { Link } from 'react-router-dom'
import { formatNumber } from './helpers/formatNumber'


export const Country = ({ src, name, population, region, capital, id}) => {
    return (
    <Link className="country" to={`/frontend-mentor/rest-countries/country/${id}`} >
        <img src={src} alt={`${name} flag`} />
        <div className="data">
            <h2>{name}</h2>
            <p><span>Population:</span> {formatNumber(population)}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>Capital:</span> {capital}</p>
        </div>
    </Link>
  )
}

