import { StyleSheet, Text, View, Image } from "react-native";

export default function NowPlayingBar({ playing }) {
  return (
    <View style={styles.npcontainer}>
      <View style={styles.contentcontainer}>
        {playing ? <><Image
          style={styles.stationlogo}
          source={{ uri: playing.station_image }}
        /></> : null}
        <Text style={styles.nowplayingtext}>
        {playing ?
          <>
            Playing: {playing.call_sign} {playing.broadcast_frequency}
          </> : <>Choose a station to start listening!</>}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  npcontainer: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  contentcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  nowplayingtext: {
    fontFamily: "ShareTechMono",
    fontSize: 16,
  },
  stationlogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
  }
});