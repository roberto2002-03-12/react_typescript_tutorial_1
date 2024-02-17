import { Counter, Usuario, TimerPadre, CounterRed, Formulario } from './components';

function App() {

  return (
    <>
      <p>React + TS</p>
      <br />
      <Counter />
      
      <Usuario />
      <br />
      <hr />
      <h4>UseEffecct</h4>
      <TimerPadre/>
      <hr />
      <CounterRed />
      <hr />
      <h4>Formulario</h4>
      <Formulario />
    </>
  )
}

export default App
