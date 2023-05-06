import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer/Index';
function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Front End",
    foto: "https://github.com/miguelsotelo01.png",
    nombre:"Miguel A Sotelo",
    puesto:"Programador",
    fav:true
  },
  {
    id: uuid(),
    equipo:"Programacion",
    foto:"https://github.com/miguelsotelo01.png",
    nombre:"Miguel A Sotelo",
    puesto:"Programador",
    fav:false
  },
  {
    id: uuid(),
    equipo:"UX y Diseño",
    foto:"https://github.com/miguelsotelo01.png",
    nombre:"Miguel A Sotelo",
    puesto:"Programador",
    fav:false
  },
  {
    id: uuid(),
    equipo:"Programacion",
    foto:"https://github.com/miguelsotelo01.png",
    nombre:"Miguel A Sotelo",
    puesto:"Programador",
    fav:false
  },
  {
    id: uuid(),
    equipo:"Innocacion y Gestion",
    foto:"https://github.com/miguelsotelo01.png",
    nombre:"Miguel A Sotelo",
    puesto:"Programador",
    fav:true
  }


]);
 const[equipos,actualizarEquipos] = useState([

  {
    id: uuid(),
    titulo:"Programacion",
    colorPrimario: "#57c258",
    colorSecundario: "#d9f7e9"
  },
  {
    id: uuid(),
    titulo:"Front End",
    colorPrimario: "#82cffa",
    colorSecundario: "#e8f8ff"
  },
  {
    id: uuid(),
    titulo:"Data Science",
    colorPrimario: "#57c258",
    colorSecundario: "#f0f8e2"
  },
  {
    id: uuid(),
  titulo:"Devops",
  colorPrimario: "#e06b69",
  colorSecundario: "#fde7e8"
  },

  {
    id: uuid(),
  titulo:"UX y Diseño",
  colorPrimario: "#b86ebf",
  colorSecundario: "#fae9f5"
  },
  {
    id: uuid(),
  titulo:"Movil",
  colorPrimario: "#fbba05",
  colorSecundario: "#fff5d9"
  },
  {
    id: uuid(),
  titulo:"Innocacion y Gestion",
  colorPrimario: "#ff8a29",
  colorSecundario: "#ffeedf"
  }
  ])
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores,colaborador])
  }
  //eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //actualizar color de equipo
  const actualizarColor = (color,id) => {
    console.log("actualizar color: " , color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario=color;
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados)
  }
  //CREAR EQUIPO
  const crearEquipo =(nuevoEquipo,id) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
  }

  const like = (id)=>{
    console.log("like",id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div>
      <Header/>
      { /*mostrarFormulario? <Formulario /> : <></>*/ }
      {
      mostrarFormulario&& <Formulario 
      equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
      equipos.map((equipo)=><Equipo 
      datos={equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo===equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />
      )
      }
      <Footer/>
    </div>
  );
}

export default App;
