import { StyleSheet, Text, View, Pressable } from "react-native";

export default function AddNewButton({setSelectorOpen}) {
  return (
    <Pressable style={styles.button} onPress={() => setSelectorOpen(true)}>
      <Text style={styles.buttontext}>add more stations</Text>
    </Pressable>
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