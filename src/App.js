import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer/Index';
function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState([{
    equipo:"Front End",
    foto: "https://github.com/miguelsotelo01.png",
    nombre:"Miguel A Sotelo",
    puesto:"Programador"
  }]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores,colaborador])
  }
const equipos = [

  {
    titulo:"Programacion",
    colorPrimario: "#57c258",
    colorSecundario: "#d9f7e9"
  },
  {
    titulo:"Front End",
    colorPrimario: "#82cffa",
    colorSecundario: "#e8f8ff"
  },
  {
    titulo:"Data Science",
    colorPrimario: "#57c258",
    colorSecundario: "#f0f8e2"
  },
  {
  titulo:"Devops",
  colorPrimario: "#e06b69",
  colorSecundario: "#fde7e8"
  },

  {
  titulo:"UX y Diseño",
  colorPrimario: "#b86ebf",
  colorSecundario: "#fae9f5"
  },
  {
  titulo:"Movil",
  colorPrimario: "#fbba05",
  colorSecundario: "#fff5d9"
  },
  {
  titulo:"Innocacion y Gestion",
  colorPrimario: "#ff8a29",
  colorSecundario: "#ffeedf"
  }
  ]
  return (
    <div>
      <Header/>
      { /*mostrarFormulario? <Formulario /> : <></>*/ }
      {
      mostrarFormulario&& <Formulario 
      equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador={registrarColaborador}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
      equipos.map((equipo)=><Equipo 
      datos={equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo===equipo.titulo)}
      />
      )
      }
      <Footer/>
    </div>
  );
}

export default App;
