
import TestSupabase from './TestSupabase'
import Visitas from './Visitas'
import RegistrarVisita from './RegistrarVisita'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🏨 Sistema de Control de Visitas</h1>
      <TestSupabase />
      <hr />
      <Visitas />
      <hr />
      <RegistrarVisita />
    </div>
  )
}

export default App