
import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import QRCode from "react-qr-code";

export default function RegistrarVisita() {
  const [nombre, setNombre] = useState("");
  const [motivo, setMotivo] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrarVisita = async (e) => {
    e.preventDefault();

    // Insertar nueva visita
    const { data, error } = await supabase
      .from("visitas")
      .insert([{ nombre_visitante: nombre, motivo }]) // 👈 usa los nombres de columnas reales
      .select();

    if (error) {
      console.error("Error al registrar visita:", error.message);
      setMensaje("❌ Error al registrar visita");
    } else {
      const nuevaVisita = data[0];
      setQrValue(VISITA-${nuevaVisita.id}); // ✅ corregido
      setMensaje("✅ Visita registrada correctamente");
      setNombre("");
      setMotivo("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📝 Registro de Visitas</h2>

      <form onSubmit={registrarVisita} style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
        <label>Nombre del visitante:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Motivo de la visita:</label>
        <input
          type="text"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          required
        />

        <button type="submit">Registrar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}

      {qrValue && (
        <div style={{ marginTop: "20px" }}>
          <h3>🎟 QR de la visita:</h3>
          <QRCode value={qrValue} size={180} />
          <p>{qrValue}</p>
        </div>
      )}
    </div>
  );
}