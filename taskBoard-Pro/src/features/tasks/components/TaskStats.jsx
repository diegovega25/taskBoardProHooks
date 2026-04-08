export function TaskStats({ stats }) {
  return (
    <section>
      <h3>Estadísticas</h3>
      <p>Total: {stats.total}</p>
      <p>Completadas: {stats.completed}</p>
      <p>Pendientes: {stats.pending}</p>
    </section>
  )
}