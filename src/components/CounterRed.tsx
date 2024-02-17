import { useReducer } from 'react'

const initialState = {
  contador: 0
}

type ActionType = {
  type: 'incrementar' | 'restar'
} | { type: 'custom', payload: number }

// nunca debes mutar el state.contador, siempre debes retornar un nuevo valor
const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch(action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1
      }
    case 'restar':
      return {
        ...state,
        contador: state.contador - 1
      }

    case 'custom':
      return {
        ...state,
        contador: action.payload
      }
    
    default:
      return state;
  }
}

export const CounterRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <div className='mt-5'>
      <h4>Contador: useReducer</h4>
      <p>Contador: { contadorState.contador } </p>
      <button
        className='btn btn-outline-primary'
        onClick={ () => dispatch({ type: 'incrementar' }) }
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary'
        onClick={ () => dispatch({ type: 'restar' }) }
      >
        -1
      </button>
      <button
        className='btn btn-outline-danger'
        onClick={ () => dispatch({ type: 'custom', payload: 100 }) }
      >
        100
      </button>
      
    </div>
  )
}
