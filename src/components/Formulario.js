import React, {Fragment} from 'react';


const Formulario = () => {
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
                />
                <label>Nombre del Dueño</label>
                <input 
                    type='text'
                    name='propietaro'
                    className='u-full-width'
                    placeholder='Nombre del dueño'
                />
                <label>Fecha</label>
                <input 
                    type='date'
                    name='fecha'
                    className='u-full-width'
                />
                <label>Hora</label>
                <input 
                    type='time'
                    name='hora'
                    className='u-full-width'
                />
                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
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