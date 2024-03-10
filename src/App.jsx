import { useEffect, useState } from "react"

// Constante que almacena el api endpoint
const FACT_RAMDON = `https://catfact.ninja/fact`
// const API_ENDPOINT = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
export function App (){
    const [fact, setFact] = useState('lorem ipsum cat')

    // Utilizamos useEffect para hacer el fetching de datos
    useEffect(() =>{
        //Realizamos una petocion GET - la url nos da un JSON
        fetch(FACT_RAMDON)
        // Obtenemos la respuesta y la pasamos a formato JSON
            .then(response => response.json())
        // Accedemos al hecho
            .then(data =>setFact(data.fact))
    }, [])

    return(
        <main>
            <h1>App de gatos xd</h1>
            <p>{fact}</p>
        </main>
        
    )
}