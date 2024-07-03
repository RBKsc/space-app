import styled from "styled-components"
import Titulo from "../titulo"
import Populares from "./Populares"
import Tags from "./tags/tags"
import Imagen from "./imagen"

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida =styled.section`
    flex-grow: 1;
`

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`



const Galeria= ({fotos=[], alSeleccionarFoto, alAlternarFavorito, setTag})=>{
    return (
    <>
    <Tags setTag={setTag}/>
    <GaleriaContainer>
        <SeccionFluida>
            <Titulo>Navegue por la galería</Titulo>
            <ImagenesContainer>
            {fotos.map (foto=> <Imagen 
            alAlternarFavorito={alAlternarFavorito}
            alSolicitarZoom={alSeleccionarFoto} 
            key={foto.id}
            foto={foto}/>
            )}
            </ImagenesContainer>
        </SeccionFluida>
        <Populares/>
    </GaleriaContainer>
    
    </>
    )
    
}

export default Galeria