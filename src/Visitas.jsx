
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export default function Visitas() {
  const [visitas, setVisitas] = useState([])

  useEffect(() => {
    const fetchVisitas = async () => {
      const { data, error } = await supabase.from('visitas').select('*')
      if (error) console.error('❌ Error al cargar visitas:', error)
      else setVisitas(data)
    }
    fetchVisitas()
  }, [])

  return (
    <div>
      <h2>📋 Registro de Visitas</h2>
      {visitas.length === 0 ? (
        <p>No hay visitas registradas</p>
      ) : (
        <ul>
          {visitas.map(v => (
            <li key={v.id}>
              {v.nombre_visitante} — Habitación {v.habitacion} — {v.motivo}  
              <br />
              Entrada: {new Date(v.fecha_entrada).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}