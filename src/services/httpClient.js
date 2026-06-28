import { API_BASE_URL } from "../config/api.js";
import { getStoredToken } from "./authStorage.js";

export async function request(path, options = {}) {
  const token = getStoredToken();
  const { skipAuth, ...fetchOptions } = options;
  const authHeaders =
    token && !skipAuth ? { Authorization: `Bearer ${token}` } : {};

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...authHeaders,
      ...fetchOptions.headers,
    },
    ...fetchOptions,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "接口请求失败");
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}
