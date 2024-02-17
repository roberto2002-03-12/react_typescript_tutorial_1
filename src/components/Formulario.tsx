import { useState, ChangeEvent } from 'react'

export const Formulario = () => {
  const [formulario, setFormulario] = useState({
    email: '',
    nombre: ''
  });

  const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value
    })
  };
  
  return (
    <form>
      
      <div className='mb-3'>
        <label className='form-label'>Email:</label>
        <input 
          type="email"
          className='form-control'
          name='email'
          onChange={ handleChange }
        />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Nombre:</label>
        <input 
          type="text"
          className='form-control'
          name='nombre'
          onChange={ handleChange }
        />
      </div>

      <pre> { JSON.stringify(formulario) } </pre>

    </form>
  );
};
