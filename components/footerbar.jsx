import { StyleSheet, Text, View } from "react-native";

export default function FooterBar() {
  
  return (
    <View style={styles.footerbar}>
      <Text style={styles.nowplayingtext}>Choose a station to start listening!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footerbar: {
    borderTopWidth: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: "white"
  },
  nowplayingtext: {
    fontFamily: "ShareTechMono",

  }
});