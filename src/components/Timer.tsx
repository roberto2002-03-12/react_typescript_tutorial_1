import { useState, useEffect, useRef } from 'react';
import { TimerArgs } from '../models';

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [ segundos, setSegundos ] = useState(0);
  // useRef se utiliza para guardar variables del DOM o las que se quiera
  // en este caso se guardara el id de un setInterval para revisar luego
  // de que si existe entonces limpiar el setInterval
  const ref = useRef<number>();
  // la versión 18 de react bota useEffect a ejecutarse dos veces si usas React.StrictMode en main.tsx
  useEffect(() => {
    // si existe entonces realizar esto clearInterval(ref.current);
    ref.current && clearInterval(ref.current); // esta función te pide el id del setInterval
    // setInterval devuelve un número el cual es su id
    ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos);
    // matar el useEffect cuando ya no se use el componente
    // return () => {}
  },[milisegundos])

  return (
    <div>
      <h4>Timer: <small>{ segundos }</small></h4>
    </div>
  )
}
