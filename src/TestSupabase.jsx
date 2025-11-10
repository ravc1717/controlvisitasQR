
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export default function TestSupabase() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    const fetchUsuarios = async () => {
      const { data, error } = await supabase.from('usuarios').select('*')
      if (error) console.error('❌ Error:', error)
      else setUsuarios(data)
    }
    fetchUsuarios()
  }, [])

  return (
    <div>
      <h2>👥 Usuarios registrados</h2>
      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados</p>
      ) : (
        <ul>
          {usuarios.map(u => (
            <li key={u.id}>
              {u.nombre} — {u.correo} ({u.rol})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}