import { request } from "./httpClient.js";

export function login(payload) {
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
    skipAuth: true,
  });
}

export function getCurrentUser() {
  return request("/api/auth/me");
}
