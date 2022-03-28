import { useEffect, useState } from "react"

export const useCountries = (filters) => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        let url = 'https://restcountries.com/v2/all'
        if(filters.region){
            url = `https://restcountries.com/v2/region/${filters.region}`
        }
        else if(filters.name){
            url = `https://restcountries.com/v2/name/${filters.name}`
        }
        url += '?fields=name,population,flags,region,capital,callingCodes'
        fetch(url)
        .then(async (value) => {
            const json = await value.json()
            setCountries(json.map(c => {
                c.id = c.callingCodes[0]
                c.src = c.flags.svg
                return c
            }))
        })
        .catch((err) => console.log(err))

    }, [filters])
    return countries
}