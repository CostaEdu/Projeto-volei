import './Atleta.css'

const Atleta = (nome, imagem, apelido) => {
    return(<div className='atleta'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{apelido}</h5>
        </div>
    </div>)
}

export default Atleta