import ruimDesativado from "./imagens/ruimDesativado.png"
import neutroDesativado from "./imagens/neutroDesativado.png"
import bomDesativado from "./imagens/bomDesativado.png"
import ruimAtivado from "./imagens/ruimAtivado.png"
import neutroAtivado from "./imagens/neutroAtivado.png"
import bomAtivado from "./imagens/bomAtivado.png"
import { useState } from "react"

export default function ItemAvaliado(props){
    const [escolhido, setEscolhido] = useState(null)
    function OpcaoEscolhida(opcao, valor){
        setEscolhido(opcao)
    
        props.onEscolheu(props.index,valor)
    }   
    return <>
        <div>
            <h2>{props.titulo}</h2>
            <img src={escolhido==1?ruimAtivado:ruimDesativado} onClick={()=>(OpcaoEscolhida(1,0))} alt="" />
            <img src={escolhido==2?neutroAtivado:neutroDesativado} onClick={()=>(OpcaoEscolhida(2,3))} alt="" />
            <img src={escolhido==3?bomAtivado:bomDesativado} onClick={()=>(OpcaoEscolhida(3,5))} alt="" />
        </div>
    </>
}