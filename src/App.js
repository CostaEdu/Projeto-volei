import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/posicao';

function App() {

  const posicoes = [
    {
      nome: '',
      corPrimaria: '',
      corSecundaria:''
    },
    {
      nome: '',
      corPrimaria '',
      corSecundaria:''
    },
    {
      nome: '',
      corPrimaria: '',
      corSecundaria:''
    },
    {
      nome: '',
      corPrimaria: '',
      corSecundaria:''
    },
  ]
  const [colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores({...colaboradores, colaborador})


  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)  } />
      <Posicao nome ="Levantes"/>
      <Posicao nome ="Líberos"/>
      <Posicao nome ="Ponteiros"/>
      <Posicao nome ="Coringas"/>
    </div>
  );
}

export default App;
