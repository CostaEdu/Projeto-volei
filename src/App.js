import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/posicao';

function App() {

  const posicoes = [
    {
      nome: 'Levante',
      corPrimaria: '#f4d0fb',
      corSecundaria:'#f9e7fd'
    },
    {
      nome: 'Líbero',
      corPrimaria: '#fefbaf',
      corSecundaria:'#fefdc8'
    },
    {
      nome: 'Ponteiro',
      corPrimaria: '#8efca7',
      corSecundaria:'#b0ffc0'
    },
    {
      nome: 'Coringa',
      corPrimaria: '#72bbec',
      corSecundaria:'#91d3ff'
    },
  ]
  const [atletas, setAtletas] = useState ([])

  const aoNovoAtletaAdicionado = (atleta) =>{
    console.log(atleta)
    setAtletas({...atletas, atleta})


  }

  return (
    <div className="App">
      <Banner />
      <Formulario posicoes={posicoes.map(posicao => posicao.nome)} aoAtletaCadastrado={atleta => aoNovoAtletaAdicionado(atleta)  } />
      
      {posicoes.map(time => <Posicao  
      key={posicao.nome} 
      nome={posicao.nome} 
      corPrimaria={posicao.corPrimaria} 
      corSecundaria={posicao.corSecundaria}
      atletas={atletas.filter(atleta => atleta.posicao === posicao.nome)}
      />)}
      
    </div>
  );
}

export default App;
