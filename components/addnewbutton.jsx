import { StyleSheet, Text, View } from "react-native";

export default function AddNewButton() {
  return (
    <View style={styles.button}>
      <Text style={styles.buttontext}>add more stations</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    borderWidth: 1,
    borderColor: "#b0b0b0",
    borderRadius: 3,
    marginVertical: 5,
    width: "70%",
  },
  buttontext: {
    fontFamily: "TurretRoad",
    color: "#b0b0b0"
  }
});