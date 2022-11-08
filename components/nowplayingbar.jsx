import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function NowPlayingBar({ selectedStation, playerState }) {

  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    if (playerState === "connecting") setDisplayText("Connecting")
    if (playerState === "playing") setDisplayText("Playing")
    if (playerState === "buffering" || playerState === "ready") setDisplayText("Buffering")
    if (playerState === "paused") setDisplayText("Paused")
  }, [playerState])

  return (
    <View style={styles.npcontainer}>
      <View style={styles.contentcontainer}>
        {selectedStation ? <><Image
          style={styles.stationlogo}
          source={{ uri: selectedStation.station_image }}
        /></> : null}
        <Text style={styles.nowplayingtext}>
        {selectedStation ?
          <>
            { displayText }: {selectedStation.call_sign} {selectedStation.broadcast_frequency}
          </> : <>Choose a station to start listening!</>}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  npcontainer: {
    height: 85,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2e2e2e",
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
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    width: "80%",
    height: 70,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  nowplayingtext: {
    fontFamily: "ShareTechMono",
    fontSize: 18,
    textAlign: "center",
  },
  stationlogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 20,
    borderRadius: 5,
  }
});