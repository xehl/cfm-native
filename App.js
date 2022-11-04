import { StyleSheet, ScrollView, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import StationCard from "./components/stationcard";
import ToolBar from "./components/toolbar";
import NowPlayingBar from "./components/nowplayingbar";
import AddNewButton from "./components/addnewbutton";
import SelectorModal from "./components/selectormodal";
import FaqModal from "./components/faqmodal";
import Logo from "./components/logo";
import stations from "./stations";
import TrackPlayer from "react-native-track-player";
import { State } from "react-native-track-player";

export default function App() {
  const [fontsLoaded] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
    ShareTechMono: require("./assets/fonts/ShareTechMono-Regular.ttf"),
    TurretRoad: require("./assets/fonts/TurretRoad-Regular.ttf"),
  });
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [playing, setPlaying] = useState(null);
  const [userPause, setUserPause] = useState(false);

  useEffect(() => {
    TrackPlayer.setupPlayer()
      .then(() => {
        console.log("track player initialized");
      })
      .catch(() => {});
  });

  // // make array of tracks to feed to player
  // let tracks = [];
  // stations.forEach((station) => {
  //   trackObj = {
  //     url: station.audio_url,
  //     title: station.title,
  //   };
  //   tracks.push(trackObj);
  // });
  // TrackPlayer.add(tracks);
  // // plays track at selected index
  // TrackPlayer.play(TrackPlayer.getTrack(3));

  useEffect(() => {
    if (playing !== null) {
      console.log("trigger");
      setUserPause(false);
      TrackPlayer.reset();
      TrackPlayer.add({ url: playing.audio_url });
      TrackPlayer.play();
      // TrackPlayer.getQueue().then((res) => console.log(res));
    }

    async (dispatch, getState) => {
      try {
        dispatch(playbackState(await TrackPlayer.getState()));
        dispatch(playbackTrack(await TrackPlayer.getCurrentTrack()));
      } catch (e) {
        // The player is probably not yet initialized
        // which means we don't have to update anything
        console.log(e);
      }
    };
  }, [playing]);

  // TrackPlayer.pause();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#acacac", "#666666", "#585858", "#252525"]}
        style={styles.linearGradient}
      >
        <View style={styles.spacer} />
        <SelectorModal
          selectorOpen={selectorOpen}
          setSelectorOpen={setSelectorOpen}
        />
        <FaqModal faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
        <ScrollView stickyHeaderIndices={[1]}>
          <Logo />
          <NowPlayingBar playing={playing} />
          <View style={styles.cardcontainer}>
            {stations.map((station) => (
              <StationCard
                station={station}
                playing={playing}
                setPlaying={setPlaying}
                userPause={userPause}
                setUserPause={setUserPause}
              />
            ))}
            <AddNewButton setSelectorOpen={setSelectorOpen} />
          </View>
        </ScrollView>
        <View style={styles.footerSpacer} />
        <ToolBar setSelectorOpen={setSelectorOpen} setFaqOpen={setFaqOpen} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b0b0b0",
    flex: 1,
  },
  cardcontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 5,
    // alignSelf: "stretch",
  },
  spacer: {
    height: 20,
    backgroundColor: "#2e2e2e",
  },
  linearGradient: {
    flex: 1,
    alignSelf: "stretch",
  },
  footerSpacer: {
    height: 60,
  },
});
