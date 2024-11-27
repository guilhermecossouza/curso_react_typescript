import { useState } from "react"
import "./aula07UseState.css"

interface InfoAlunoProps {
    nome: string;
    idade: string | number;
}


export function Aula07UseState() {
    const [input, setImput] = useState("");
    const [idade, setIdade] = useState<number | string>("");
    const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();
    const [count, setCount] = useState<number>(0);
    
    function mostrarAluno() {
        setInfoAluno({
            nome: input,
            idade: idade,
        })
    }

    return(
        <div className="cls-use-state">
            <input 
                type="text"
                placeholder="Digite seu nome"
                value={input}
                onChange={ (event) => setImput(event.target.value)}
            />

            <input 
                type="text" 
                placeholder="Digite sua idade" 
                value={idade} 
                onChange={(event) => setIdade(event.target.value)} />

            <button type="button" onClick={ mostrarAluno }>Mostrar Aluno</button>
            <p>Nome aluno: {infoAluno?.nome}</p>
            <p>Idade aluno: {infoAluno?.idade}</p>
            <br/>
            <br/>
            <button onClick={() =>  count < 10 && setCount( count + 1)}>+</button>
            <p>{ count }</p>    
            <button onClick={() =>  count > 0 && setCount(count - 1)}>-</button>
        </div>        
    );
}