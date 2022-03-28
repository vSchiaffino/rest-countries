import React from 'react'
import { useState } from 'react'
import { Countries } from '../Countries'
import { useCountries } from '../hooks/useCountries'

export const IndexPage = () => {
    const [filters, setFilters] = useState({name: '', region: ''})
    const countries = useCountries(filters)
    const regions = [
        {value: '', label: "Filter by Region"},
        {value: 'Africa', label: "Africa"},
        {value: 'Americas', label: "Americas"},
        {value: 'Asia', label: "Asia"},
        {value: 'Europe', label: "Europe"},
        {value: 'Oceania', label: "Oceania"},
    ]
    return (
        <main className="index">
            <div className="filters">
                <input type="text" placeholder="Search for a country..." className="input search" value={filters.name} onChange={(e) => {setFilters({...filters, name: e.target.value})}} />
                <select className="input dropdown" value={filters.region} onChange={(e) => {setFilters({...filters, region: e.target.value})}} >
                    {regions.map((r) => ( 
                        <option value={r.value} key={r.value}>{r.label}</option> 
                    ) )
                    }
                </select>
            </div>
            <Countries countries={countries}/>
        </main>
    )
}
