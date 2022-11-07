import { StyleSheet, Text, Pressable, Image, View } from "react-native";
import { Divider } from 'react-native-paper';
import TrackPlayer from "react-native-track-player";

export default function StationCard({ station, selectedStation, setSelectedStation, userPause, setUserPause, playerState }) {

  const controlCardColor = () => {

    // return white if station is not playing
    if (selectedStation?.call_sign !== station.call_sign) return "white"
    else {
      // light red while connecting
      if (playerState === "connecting") return "#db8a8a"
      // gray while buffering
      if (playerState === "buffering" || playerState === "ready") return "#c9c9c9"
      // green while playing or paused
      if (playerState === "playing") return "#cefac8"
      if (playerState === "paused") return "#cefac8"

    }
  }

  function handleCardClick(e) {
    // console.log(playing)
    // console.log(station)

    // unload station if user clicks the currently playing card
    if (selectedStation === station) {
      if (userPause === false) {
        TrackPlayer.pause()
        setUserPause(true)
        setSelectedStation(null)
      }
      else {
        TrackPlayer.play()
        setUserPause(false)
      }
    }
    else {
      setSelectedStation(station)
    }
  }

  return (
    <Pressable style={[styles.card, {backgroundColor: controlCardColor()}]} onPress={handleCardClick}>
      <View style={styles.cardcontent}>
        <Image
          style={styles.logo}
          source={{uri: station.college_image}}
        />
        <Divider style={{ width: 1, height: 120 }}/>
        <View style={styles.textcontainer}>
          <Text style={styles.stationtext}>{station.call_sign} {station.broadcast_frequency}</Text>
          <Text style={styles.collegetext}>{station.college_name}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 145,
    width: "92%",
    borderRadius: 8,
    marginVertical: 5,
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  cardcontent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textcontainer: {
    alignSelf: "stretch",
    justifyContent: "center",
    width: 210,
  },
  stationtext: {
    fontFamily: "ShareTechMono",
    fontSize: 24,
    textAlign: "right"
  },
  collegetext: {
    fontFamily: "ShareTechMono",
    color: "#2e2e2e",
    textAlign: "right"
  },
  logo: {
    height: 75,
    width: 80,
    margin: 20,
    resizeMode: "contain"
  }
});