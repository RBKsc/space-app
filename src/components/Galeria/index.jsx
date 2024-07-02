import styled from "styled-components"
import Titulo from "../titulo"
import Populares from "./Populares"
import Tags from "./tags/tags"

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida =styled.section`
    flex-grow: 1;
`


const Galeria= ()=>{
    return (
    <>
    <Tags/>
    <GaleriaContainer>
        <SeccionFluida>
            <Titulo>Navegue por la galería</Titulo>
        </SeccionFluida>
        <Populares/>
    </GaleriaContainer>
    
    </>
    )
    
}

export default Galeria