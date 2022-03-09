import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';





function App() {
  // Arrgelo de citas
  const [citas, guardarCitas] = useState([]);

  //Use efecct para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    console.log('listo');
  }, [citas]);



  // Funcion q tome las citas actuales y agregre la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

//funcion q elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id != id);
    guardarCitas(nuevasCitas)
  }
  
  //Mnsaje condicional
  const titulo = citas.length === 0 ? 'Agrega una cita' : 'Tus citas';
  
  return (
    <Fragment>
      <h1>Veterinaria Canina</h1>
    
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario 
              crearCita = {crearCita}
              />
          </div>
          <div className='one-half column'>
            <h3>{titulo}</h3>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
      
     </Fragment> 
  );
}

export default App;
