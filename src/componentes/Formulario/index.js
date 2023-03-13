import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
const Formulario = () => {

    const times = [
        'Levante',
        'Líbero',
        'Ponta',
        'Coringa'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Forme foi submetido")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Sobrenome" placeholder="Digite seu sobrenome" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label = "Time" itens = {times}/>
                <Botao>
                    Criar Card
                </Botao>    
            </form>
        </section>
    )
}

export default Formulario