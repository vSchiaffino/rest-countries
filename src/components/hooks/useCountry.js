import { useEffect, useState } from "react"

export const useCountry = (id) => {
    const [country, setCountry] = useState(null)
    useEffect(() => {
        let url = `https://restcountries.com/v2/callingcode/${id}?fields=flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,borders,languages`
        fetch(url)
        .then(async (value) => {
            const json = await value.json()
            let c = json[0]
            c.topLevelDomain = c.topLevelDomain[0]
            c.src = c.flags.svg
            if(c && c.borders && c.borders.length > 0){
                const response = await fetch(`https://restcountries.com/v2/alpha?codes=${c.borders.join(",")}&fields=name,callingCodes`)
                const bordersJson = await response.json()
                const borders = bordersJson.map(b => ({name: b.name, id: b.callingCodes[0]}))
                c.borders = borders
            }
            else{
                c.borders = []
            }
            setCountry(c)
        })
        .catch((err) => console.log(err))

    }, [id])
    return country
}