import React, {Fragment, useState} from 'react';


const Formulario = () => {

    //Crear state de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //funcion que se ejecuta cada q el usuario escribe en un input
    const actualizarState = () => {
        console.log('escribiendo..')
    }
    return ( 
        <Fragment>
            <h3>Crear Cita</h3>

            <form>
                <label>Nombre Mascota</label>
                <input 
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre mascota'
                    onChange={actualizarState}
                />
                <label>Nombre del Dueño</label>
                <input 
                    type='text'
                    name='propietaro'
                    className='u-full-width'
                    placeholder='Nombre del dueño'
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input 
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                />
                <label>Hora</label>
                <input 
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                />
                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={actualizarState}
                ></textarea>
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar cita</button>
            </form>


        </Fragment>
     );
}
 
export default Formulario;