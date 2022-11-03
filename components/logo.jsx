import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
  return (
    <View style={styles.logocontainer}>
      <Text style={styles.logotextlg}>
      campus fm
      </Text>
      <Text style={styles.logotextsm}>
        stream college radio
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2e2e2e",
    alignSelf: "stretch"
  },
  logotextlg: {
    fontFamily: "Monoton",
    fontSize: 30,
    color: "white"
  },
  logotextsm: {
    fontFamily: "TurretRoad",
    fontsize: 16,
    color: "white",
    marginTop: -8
  }
});
