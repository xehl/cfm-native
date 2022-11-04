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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  nowplayingtext: {
    fontFamily: "ShareTechMono",
  }
});