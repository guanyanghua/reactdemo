import { request } from "./httpClient.js";

export function getPlayers() {
  return request("/api/players");
}

export function createPlayer(payload) {
  return request("/api/players", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function updatePlayer(playerId, payload) {
  return request(`/api/players/${playerId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function deletePlayer(playerId) {
  return request(`/api/players/${playerId}`, {
    method: "DELETE",
  });
}
