import { useMachine } from '@xstate/react'
import './App.css'
import { createMachine } from 'xstate'

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
})

function App() {
  const [state, send] = useMachine(toggleMachine);

  return (
    <button onClick={() => send({ type: 'TOGGLE' })}>
      { state.value === 'active' ? "Deactive it" : "Activate it" }
    </button>
  )
}

export default App
