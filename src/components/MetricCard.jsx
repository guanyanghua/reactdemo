export function MetricCard({ item }) {
  return (
    <article className="metric-card">
      <div>
        <p>{item.label}</p>
        <strong>{item.value}</strong>
      </div>
      <span className={item.positive ? "metric-up" : "metric-down"}>
        {item.change}
      </span>
    </article>
  );
}
