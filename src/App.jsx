import { useEffect, useState } from "react"
import '../src/appStyle.css'

// Constante que almacena el api endpoint
const FACT_RAMDON = `https://catfact.ninja/fact`
// const API_ENDPOINT = `https://cataas.com/cat/says/${text_fact}?fontSize=50&fontColor=red`
export function App (){
    const [fact, setFact] = useState()
    const [imgUrl, setImgUrl] = useState()

    // Utilizamos useEffect para hacer el fetching de datos
    useEffect(() =>{
        //Realizamos una peticion GET - la url nos da un JSON
        fetch(FACT_RAMDON)
        // Obtenemos la respuesta y la pasamos a formato JSON
            .then(response => response.json())
        // Accedemos al hecho
            .then(data =>{
                const {fact} = data
                setFact(fact)
                const text_fact = fact.split(' ', 1)
                
                fetch(`https://cataas.com/cat/says/${text_fact}?fontSize=50&fontColor=red`)
                .then(response => response)
                .then(data =>{
                    const {url} = data
                    setImgUrl(url)
                })
            })
                 
    }, [])

    return(
        <main>
            <h1>App de gatos xd</h1>
            <p>{fact}</p>
            <img src={imgUrl} alt="" />
        </main>
        
    )
}