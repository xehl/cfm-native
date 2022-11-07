import { StyleSheet, View, Pressable, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import TrackPlayer from "react-native-track-player";
import { useState } from "react"

export default function ToolBar({ setSelectorOpen, setFaqOpen, setUserPause, query, setQuery }) {

  const [showSearchBar, setShowSearchBar] = useState(false)

  const toggleSearchBar = () => {
    console.log(showSearchBar)
    if (showSearchBar)
      setShowSearchBar(false)
    else setShowSearchBar(true)
  }

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
  }
  
  return (
    <View style={styles.outercontainer}>
      <View style={[styles.searchbar, {display: showSearchBar ? "flex" : "none"}]}>
      {/* <View style={[styles.searchbar]}> */}
        <TextInput
          placeholder="search"
          style={styles.input}
          onChangeText={setQuery}
          value={query}
        />
      </View>
      <View style={styles.headerbar}>
        <View style={styles.toolbarcontainer}>
          {/* <Pressable onPress={() => setSelectorOpen(true)}> */}
          <Pressable onPress={toggleSearchBar}>
            <FontAwesome name="search" size={24} color="white" />
          </Pressable>
          <Pressable onPress={handleShuffle}>
            <Feather name="shuffle" size={24} color="white" />
          </Pressable>
          <Pressable onPress={handlePlay}>
            <FontAwesome name="play" size={24} color="white" />
          </Pressable>
          <Pressable onPress={handlePause}>
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
    height: 60,
    backgroundColor: "#2e2e2e",
    borderBottomWidth: 1,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 8,
  }
});