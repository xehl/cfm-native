import { StyleSheet, View, Pressable, TextInput, Animated } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import TrackPlayer from "react-native-track-player";
import stations from "../stations";
import { useRef, useState } from "react"

export default function ToolBar({ setFaqOpen, userPause, setUserPause, query, setQuery, setSelectedStation }) {

  const [showSearchBar, setShowSearchBar] = useState(false)
  const animated = useRef(new Animated.Value(60)).current;
  const duration = 250;

  function toggleSearchBar() {
    if (showSearchBar) {
      slideOut()
      setShowSearchBar(false)
    }
    else {
      slideIn()
      setShowSearchBar(true)
    }
  }

  const slideIn = () => {
    Animated.timing(animated, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(animated, {
      toValue: 60,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  function handlePause() {
    TrackPlayer.pause()
    setUserPause(true)
  }
  function handlePlay() {
    TrackPlayer.play()
    setUserPause(false)
  }
  function handleShuffle() {
    console.log("shuffle")
    let randomStation = stations[Math.floor(Math.random() * stations.length)]
    setSelectedStation(randomStation)
  }
  
  return (
    <View style={styles.outercontainer}>
      <Animated.View style={[styles.searchbar, {transform: [{translateY: animated}]}]}>
        <TextInput
          placeholder="search"
          placeholderTextColor = "#2e2e2e"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={setQuery}
          value={query}
        />
      </Animated.View>
      <View style={styles.headerbar}>
        <View style={styles.toolbarcontainer}>
          {/* <Pressable onPress={() => setSelectorOpen(true)}> */}
          <Pressable onPress={toggleSearchBar}>
            <FontAwesome name="search" size={24} color="white" />
          </Pressable>
          <Pressable onPress={handleShuffle}>
            <Feather name="shuffle" size={24} color="white" />
          </Pressable>
          <Pressable onPress={handlePlay} style={{ display: userPause ? "flex" : "none" }}>
          {/* <FontAwesome name="play" size={24} style={{ display: userPause ? "flex" : "none" }} color="white" /> */}
          <FontAwesome name="play" size={24} color="white" />
          </Pressable>
          <Pressable onPress={handlePause} style={{ display: userPause ? "none" : "flex" }}>
            <FontAwesome name="pause" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => setFaqOpen(true)}>
            <FontAwesome name="question-circle" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outercontainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  headerbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#2e2e2e",
  },
  toolbarcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%"
  },
  searchbar: {
    position: "absolute",
    height: 110,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#2e2e2e",
    borderBottomWidth: 1,
  },
  input: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 30,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    color: "#2e2e2e",
    fontFamily: "ShareTechMono"
  }
});