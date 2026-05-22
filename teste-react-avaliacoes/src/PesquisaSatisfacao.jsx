import { useState } from "react"
import ItemAvaliado from "./itemAvaliado.jsx"
import "./PesquisaSatisfacao.css"

export default function PesquisaSatisfacao(props){
    const [respostas, setRespostas] = useState([])
    const itens = props.itens
    const [resultado, setResultado] = useState(null)
    console.log(respostas)
    function onEscolheu(opcao,valor){
        console.log(opcao,valor)
        setRespostas(prev => {
            const novo = [...prev];
            novo[opcao] = valor;
            return novo;
        });
    }

    function calcularResultado(){
        const respondidas = respostas.filter(r => r !== undefined);
        let soma = 0;

        if(respondidas.length < itens.length){
            alert("Responda todas as perguntas!");
            return;
        }

        for (let i = 0; i < respondidas.length; i++) {
            soma += parseInt(respondidas[i]);
        }
        setResultado((soma/respondidas.length).toFixed(2))
        
    }
    return <>
        {!resultado?<>
            <h2>Pesquisa de Satisfação</h2>
        <div id="perguntas">
            {itens.map((titulo, index)=>(<ItemAvaliado index={index} key={index} titulo={titulo} onEscolheu={onEscolheu}/>))}
        </div>
        <button onClick={()=>(calcularResultado())}>Calcular</button>
        </>:<>
            <h3>Média:{resultado}</h3>
            <button onClick={()=>(setResultado(null))}>Tentar Novamente</button>
        </>}
    </>
}