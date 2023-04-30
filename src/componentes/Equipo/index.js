import Colaborador from "../Colaborador";
import "./Equipo.css"

const Equipo = (props) => {

    const {colorPrimario,colorSecundario,titulo}=props.datos
    const {colaboradores} = props
    const obj={
        backgroundColor:colorSecundario
    }


    const estiloTitulo={borderColor:colorPrimario}
    return <>
    {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador,index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        />)
                    }
                </div>
            </section>
    }
    </>
}
export default Equipo