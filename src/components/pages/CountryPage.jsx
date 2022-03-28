import React from 'react'
import { useParams, Link } from 'react-router-dom'
import '../../css/country.css'
import { CountryDetails } from '../CountryDetails';
import { useCountry } from '../hooks/useCountry';


export const CountryPage = () => {
  const params = useParams();
  const country = useCountry(params.id);
  return (
    <main className="main">
    <div className="up">
        <Link className="btn" to="/frontend-mentor/rest-countries/">Back</Link>
    </div>
    {
        country && <CountryDetails {...country}/>
    }
</main>
  )
}
