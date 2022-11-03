import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { useFonts } from "expo-font";
import StationCard from "./components/stationcard";
import HeaderBar from "./components/headerbar";
import FooterBar from "./components/footerbar";
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
      <Logo />
      <HeaderBar />
      <View style={styles.cardcontainer}>
        {stations.map((station) => (
          <StationCard station={station} />
        ))}
      </View>
      <FooterBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "ShareTechMono",
    flex: 1,
    backgroundColor: "#2e2e2e",
    alignItems: "center",
    justifyContent: "center",
  },
  cardcontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "stretch",
  },
});
