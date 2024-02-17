// import { useState, ChangeEvent } from 'react'
import { useForm } from '../hooks'
import { IUsuarioFormulario } from '../models'

export const Formulario = () => {

  const { formulario, handleChange } = useForm<IUsuarioFormulario>({
    email: 'Example',
    nombre: 'email@example.com'
  })

  // al definirle que tipado se envia es más fácil saber que
  // datos va retornar
  const { nombre, email } = formulario

  // const [formulario, setFormulario] = useState({
  //   email: '',
  //   nombre: ''
  // });

  // const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;

  //   setFormulario({
  //     ...formulario,
  //     [name]: value
  //   })
  // };
  
  return (
    <form>
      
      <div className='mb-3'>
        <label className='form-label'>Email:</label>
        <input 
          type="email"
          className='form-control'
          name='email'
          onChange={ handleChange }
          value={ email }
        />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Nombre:</label>
        <input 
          type="text"
          className='form-control'
          name='nombre'
          onChange={ handleChange }
          value={ nombre }
        />
      </div>

      <pre> { JSON.stringify(formulario) } </pre>

    </form>
  );
};
