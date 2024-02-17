import { useState } from 'react'
import { IUsuario } from '../models';

const usuarioInit: IUsuario = {
  uid: '',
  name: ''
}

export const Usuario = () => {
  const [ user, setUser ] = useState<IUsuario>(usuarioInit);

  const login = () => {
    setUser({
      uid: 'ABCDE12345',
      name: 'Roberto Contreras'
    })
  }
  
  return (
    <div className='mt-5'>
      <h3> Usuario: useState </h3>
      <button 
        onClick={ login }
        className='btn btn-outline-primary'
      >
        Login
      </button>
      <p>Nombre: { user.name || 'not defined' }</p>
      <p>UUID: { user.uid || 'not defined' }</p>
    </div>
  )
}
