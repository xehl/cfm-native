import { StyleSheet, Text, View } from "react-native";
import { createBoxShadowValue } from "react-native-web/dist/cjs/exports/StyleSheet/preprocess";
import { back } from "react-native/Libraries/Animated/Easing";

export default function StationCard({ station }) {

  return (
    <View style={styles.card}>
      <Text style={styles.cardtext}>{station.call_sign} {station.broadcast_frequency}</Text>
      <Text style={styles.cardtext}>{station.college_name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
  },
  cardtext: {
    fontFamily: "ShareTechMono",
  }
});