import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
const Formulario = (props) => {

    const times = [
        'Levante',
        'Líbero',
        'Ponteiro',
        'Coringa'
    ]

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [imagem, setImagem] = useState('')
    const [posicao, setPosicao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            sobrenome,
            imagem,
            posicao
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor = {nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Sobrenome" 
                    placeholder="Digite seu sobrenome" 
                    valor={sobrenome}
                    aoAlterado={valor => setSobrenome(valor)}
                    />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true}  
                    label = "Posição" itens = {times}
                    valor ={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>    
            </form>
        </section>
    )
}

export default Formulario