import { useEffect, useState } from "react"
import '../src/appStyle.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardBody, CardText } from "react-bootstrap";


// Constante que almacena el api endpoint
const FACT_RAMDON = `https://catfact.ninja/fact`
// const API_ENDPOINT = `https://cataas.com/cat/says/${text_fact}?fontSize=50&fontColor=red`

//CREAMOS UN CUSTOM HOOKS
function useCatImg({fact}){
    const [imgUrl, setImgUrl] = useState()
        // Recuperar la imagen (EJEMPLO PARA SEPARAR EN DOS useEffect)
    useEffect(() =>{
        if(!fact) return
        const text_fact = fact.split(' ', 1)        

        fetch(`https://cataas.com/cat/says/${text_fact}?fontSize=50&fontColor=red`)
            .then(response => {                        
                const { url } = response
                setImgUrl(url)
            }) 
    }, [fact])
    return {imgUrl}
} // Devuelve el ImgUrl 


export function App (){
    const [fact, setFact] = useState()
    //Capturamos imgUrl del custom usecat y le pasamos el parametro fact
    const {imgUrl} = useCatImg({fact})

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
            })     
    }, [])


    const handleClick = () =>{
        fetch(FACT_RAMDON)
        // Obtenemos la respuesta y la pasamos a formato JSON
            .then(response => response.json())
        // Accedemos al hecho
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }

    return(
        <main>
            <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-4 mb-4">Prueba Tecnica React</h1>
            {/* Renderizado condicional si fact es false no se renderiza nada 
            si es tru se renderiza <p>{fact}</p>*/}
            <Card style={{width: '20rem', textAlign: 'center'}}>
                <Card.Img variant="top" src={imgUrl} alt="Aun no se que poner aqui" />
                <CardBody>
                    <CardText>
                    {fact && <p>{fact}</p> } 
                    </CardText>
                    <Button variant="success" className="mt-3 mb-3" onClick={handleClick} >Reset IMG</Button>
                </CardBody>
            </Card>
            </div>
        </main>
        
    )
}