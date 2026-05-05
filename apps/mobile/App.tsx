import { pingResponseSchema } from "@fishing-log/shared";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const ping = pingResponseSchema.safeParse({ ok: true });

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.hint}>
        Shared package: {ping.success ? "ok" : "invalid"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hint: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
  },
});
