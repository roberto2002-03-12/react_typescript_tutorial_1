import { ChangeEvent, useState } from 'react';

// se recomienda utilizar "T": tipo generico en vez de any
// en estos casos cuando no sabes que tipeado te envien

export function useForm<T>( initState: T ) {
// definir generico con función de flechas
// export const useForm = <T extends Object>(initState: T) => {
  
  const [formulario, setFormulario] = useState(initState);

  const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value
    })
  };

  return {
    formulario,
    handleChange
  }
}