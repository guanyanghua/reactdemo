import { usePlayers } from "../hooks/usePlayers.js";

export function ApiPlayersPage() {
  const { players, loading, error, reload } = usePlayers({ refreshInterval: 3000 });

  if (loading) {
    return <div className="panel">加载中...</div>;
  }

  if (error) {
    return <div className="panel">{error}</div>;
  }

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="panel-kicker">FastAPI</p>
          <h2>后端玩家数据</h2>
        </div>
        <button className="secondary-button" type="button" onClick={reload}>
          手动刷新
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>玩家名</th>
              <th>等级</th>
              <th>区服</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>Lv.{player.level}</td>
                <td>{player.server}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
