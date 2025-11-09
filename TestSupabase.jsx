
import { useEffect, useState } from "react";
import { supabase } from "./TestsupabaseClient";

export default function TestSupabase() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
          // Intentamos leer datos de la tabla "visitas"
          const { data, error } = await supabase.from("visitas").select("*");
          if (error) {
              console.error("❌ Error de conexión:", error.message);
          } else {
              console.log("✅ Datos obtenidos:", data);
              setData(data);
          }
      }

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🔗 Conexión a Supabase</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Intentando conectar con la base de datos...</p>
      )}
    </div>
  );
}