import { Redirect } from "expo-router";

export default function Index() {
  // For now, always send to login first
  return <Redirect href="/auth/login" />;
}
