import { useState } from "react"

export default function Tecla(props){
    let [digitoAtual, setDigitoAtual] = useState(0)
    function trocaNumero(escolha){
        let novoDigito = 0
        if(escolha=="Incrementar"){
            novoDigito = digitoAtual==9?0:digitoAtual+1

        }else{
            novoDigito = digitoAtual==0?9:digitoAtual-1
        }
        setDigitoAtual(novoDigito)
        props.onDigitado(props.casaNumero, novoDigito)
    }
    return <div className="Tecla">
            <span onClick={()=>(trocaNumero("Incrementar"))}>➕</span>
            <h1>{digitoAtual}</h1>
            <span onClick={()=>(trocaNumero())}>➖</span>
        </div>   
    
}