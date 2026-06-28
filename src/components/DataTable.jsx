import { StatusBadge } from "./StatusBadge.jsx";

export function DataTable({ title, kicker, columns, rows }) {
  return (
    <div className="panel table-panel">
      <div className="panel-header">
        <div>
          <p className="panel-kicker">{kicker}</p>
          <h2>{title}</h2>
        </div>
        <button className="secondary-button" type="button">
          查看全部
        </button>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {row.cells.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
                <td>
                  <StatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
