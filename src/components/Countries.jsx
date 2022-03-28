import React from 'react'
import { Country } from './Country'

export const Countries = ({countries}) => {
  return (
    <div className="countries">
        {countries.map((country) => (
            <Country 
              key={country.name}
              {...country}
            />
        ))}
    </div>
  )
}
