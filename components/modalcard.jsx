import { StyleSheet, Text, Pressable, Image, View } from "react-native";
import { Divider } from 'react-native-paper';

export default function ModalCard() {

  function handleSelect() {
    console.log("pressed")
  }

  return (
    <Pressable onPress={handleSelect}>
      <View style={styles.card}></View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 140,
    width: 200,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
})