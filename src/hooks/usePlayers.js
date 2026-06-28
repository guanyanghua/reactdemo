import { useCallback, useEffect, useMemo, useState } from "react";

import { getPlayers } from "../services/playerApi.js";

export function usePlayers({ refreshInterval = 5000 } = {}) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdatedAt, setLastUpdatedAt] = useState(null);

  const loadPlayers = useCallback(async () => {
    try {
      const data = await getPlayers();
      setPlayers(data);
      setError("");
      setLastUpdatedAt(new Date());
    } catch (requestError) {
      setError(requestError.message || "获取玩家数据失败");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPlayers();

    if (!refreshInterval) {
      return undefined;
    }

    const timer = window.setInterval(loadPlayers, refreshInterval);

    return () => {
      window.clearInterval(timer);
    };
  }, [loadPlayers, refreshInterval]);

  const riskPlayers = useMemo(
    () => players.filter((player) => player.status !== "normal"),
    [players],
  );

  return {
    players,
    riskPlayers,
    loading,
    error,
    lastUpdatedAt,
    reload: loadPlayers,
  };
}
