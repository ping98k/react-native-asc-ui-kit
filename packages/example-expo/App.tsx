import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { hello } from "react-native-asc-ui-kit";

export default function App() {
  hello();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
});
