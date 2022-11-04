import { StyleSheet, ScrollView, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import StationCard from "./components/stationcard";
import HeaderBar from "./components/headerbar";
import FooterBar from "./components/footerbar";
import AddNewButton from "./components/addnewbutton";
import Logo from "./components/logo";
import stations from "./stations";

export default function App() {
  const [loaded] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
    ShareTechMono: require("./assets/fonts/ShareTechMono-Regular.ttf"),
    TurretRoad: require("./assets/fonts/TurretRoad-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#acacac", "#666666", "#585858", "#252525"]}
        style={styles.linearGradient}
      >
        <View style={styles.spacer} />
        <ScrollView stickyHeaderIndices={[1]}>
          <Logo />
          <HeaderBar />
          <View style={styles.cardcontainer}>
            {stations.map((station) => (
              <StationCard station={station} />
            ))}
            <AddNewButton />
          </View>
        </ScrollView>
        <View style={styles.footerSpacer} />
        <FooterBar />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b0b0b0",
    flex: 1,
  },
  cardcontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 5,
    // alignSelf: "stretch",
  },
  spacer: {
    height: 20,
    backgroundColor: "#2e2e2e",
  },
  linearGradient: {
    flex: 1,
    alignSelf: "stretch",
  },
  footerSpacer: {
    height: 60,
  },
});
