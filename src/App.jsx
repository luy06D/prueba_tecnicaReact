import { useEffect, useState } from "react"

// Constante que almacena el api endpoint
const FACT_RAMDON = `https://catfact.ninja/fact`
// const API_ENDPOINT = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
export function App (){
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    // Utilizamos useEffect para hacer el fetching de datos
    useEffect(() =>{
        //Realizamos una petocion GET - la url nos da un JSON
        fetch(FACT_RAMDON)
        // Obtenemos la respuesta y la pasamos a formato JSON
            .then(response => response.json())
        // Accedemos al hecho
            .then(data => {
                const { fact } = data
                setFact(fact)

                const firstWord = fact.split(' ', 3).join(' ')                

                fetch(`https://cataas.com/cat/gif/says/${firstWord}?filter=mono&fontColor=orange&fontSize=20&type=square`)
                    .then(response => {                        
                        const { url } = response
                        setImageUrl(url)
                    })     
            })
    }, [])

    return(
        <main>
            <h1>App de gatos xd</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the
            first rhee words for ${fact}`} />}
        </main>
        
    )
}