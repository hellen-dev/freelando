import './styles.scss'; // Importe o arquivo SASS aqui

export const CampoTexto = ({ titulo }) => {
    return (
        <div className="label-estilizada">
            {titulo}
            <input className="input-estilizado" type="text" />
        </div>
    );
};

export default CampoTexto;