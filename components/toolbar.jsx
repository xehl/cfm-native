import { StyleSheet, View, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export default function ToolBar({ setSelectorOpen, setFaqOpen }) {
  
  return (
    <View style={styles.headerbar}>
      <View style={styles.toolbarcontainer}>
        <Pressable onPress={() => setSelectorOpen(true)}>
          <MaterialIcons name="dashboard-customize" size={24} color="white" />
        </Pressable>
        <Feather name="shuffle" size={24} color="white" />
        <FontAwesome name="play" size={24} color="white" />
        <FontAwesome name="pause" size={24} color="white" />
        <Pressable onPress={() => setFaqOpen(true)}>
          <FontAwesome name="question-circle" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    // alignSelf: "stretch",
    backgroundColor: "#2e2e2e",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  toolbarcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%"
  }
});