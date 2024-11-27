import { Header } from './components/header';
import { Aluno } from './components/Aluno';
import { Footer } from './components/Footer';
import { Aula07UseState } from './components/Aula07UseState';
import { FixandoUseState } from './components/FixandoUseState';

import "./curso.css"

export default function App() {
  return(
    <div>
      <Header title="Seção 2 - React + Typescript"/>
      <h1>Aulas de 4 a 6</h1>
      <Aluno nome="Guilherme Costa" idade={40}/>
      <Aluno nome="Kenia Silva" idade={40}/>
      <Footer />
      <hr />
      <Header title="Aula 7 - Conhecendo useState"/>
      <Aula07UseState />
      <hr />
      <Header title="Aula 8 - Fixiando useState"/>
      <FixandoUseState />
    </div>    
  )
}




