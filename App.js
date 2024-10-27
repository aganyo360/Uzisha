import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>WELCOME TO MOBILE APP DEVELOPMENT 101</Text>
      <Text>Home</Text>
      <Text>About</Text>
      {/* <StatusBar style="auto" /> */}
      <Text numberOfLines="{10}">This is a sample explanation to show how the numberoflines prop on react affects the number of lines</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
