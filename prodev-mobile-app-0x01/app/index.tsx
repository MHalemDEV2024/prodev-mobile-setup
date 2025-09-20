import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Main heading */}
      <Text style={styles.title}>Welcome to Home Screen</Text>

      {/* ✅ Extra Text #1 */}
      <Text style={styles.subtitle}>This is the first extra text.</Text>

      {/* ✅ Extra Text #2 */}
      <Text style={styles.highlight}>This is the second extra text.</Text>

      {/* ✅ Extra Text #3 */}
      <Text style={styles.footer}>This is the third extra text.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.secondary,
    marginBottom: 8,
  },
  highlight: {
    fontSize: 16,
    color: Colors.accent,
    fontStyle: "italic",
    marginBottom: 8,
  },
  footer: {
    fontSize: 14,
    color: Colors.text,
  },
});
