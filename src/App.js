import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';





function App() {
  // Arrgelo de citas
  const [citas, guardarCitas] = useState([]);


  // Funcion q tome las citas actuales y agregre la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }


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
            <h3>Tus citas</h3>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
      
     </Fragment> 
  );
}

export default App;
