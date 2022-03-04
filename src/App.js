import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';





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
              2
          </div>
        </div>
      </div>
      
     </Fragment> 
  );
}

export default App;
