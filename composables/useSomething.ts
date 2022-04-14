import client from "~/composables/useClient";

export default function useSomething() {
  const x = client.auth;
  return {};
}
