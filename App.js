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

      <Image
        source={require('./assets/splash.png')}
        // this is only for a local image
        />
        <Image
        //  for the network image or images with links we use the following\
        source={{
          width:300,
          height:200,
          uri: 'https://example.com/image.jpg',
        }}
        //  resizeMode="contain" // or "cover" or "stretch"
        //  style={{ width: 200, height: 200 }} // adjust the size as needed
        //  blurRadius={10} // for blur effect
        />

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
