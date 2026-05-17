import Tecla from './tecla.jsx'
import './cofre.css'
import { useState } from 'react'

export default function Cofre(props){
    let senhaCofre = props.senha
    let [igual, setIgual] = useState(null)
    let [senhaColocada, setSenhaColocada] = useState(senhaCofre.split("").map((d) => "0"))
    let [numeroTentativas, setNumeroTentativas] = useState(3)
    function onDigitado(casaNumero, numero){
        let novaSenhaColocada = [...senhaColocada]
        novaSenhaColocada[casaNumero] = String(numero)
        console.log("nova senha: " + {novaSenhaColocada})
         setSenhaColocada(novaSenhaColocada)
    }

    function abrirCofre(){
        
        if(senhaColocada.join("") === senhaCofre){
            setIgual(true)
        }else{
            setIgual(false)
            let novoNumeroTentativas = numeroTentativas - 1
            setNumeroTentativas(novoNumeroTentativas)
        }
    }   
    console.log(senhaColocada)
    return <div>
        <h1>Cofre: {senhaCofre}</h1>
        <section>
            {senhaCofre.split("").map((digito, index)=>(<Tecla key={index} casaNumero={index} onDigitado={onDigitado}/>))}
        </section>
        <button disabled={numeroTentativas==0} onClick={()=>(abrirCofre())}>Abrir</button>
        {igual?<h2>Cofre Aberto</h2>:(igual!=null?<h2>Senha Errada - Numero tentativas restantes {numeroTentativas}</h2>:null)}
    </div>
}