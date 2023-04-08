import Atleta from '../Atleta'
import './Posicao.css'

const Posicao = (props) => {

    const corSecundaria = {backgroundColor: props.corSecundaria}
    const corPrimaria = {borderColor: props.corPrimaria}

    return(
        <section className='posicao' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div className='atletas'>
                {props.atletas.map( atleta => <Atleta nome={atleta.nome} apelido={atleta.apelido} imagem={atleta.imagem}/>)}
            </div>

        </section>
    )
}

export default Posicao