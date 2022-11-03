import { StyleSheet, View } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export default function HeaderBar() {
  
  return (
    <View style={styles.headerbar}>
      <View style={styles.toolbarcontainer}>
        <MaterialIcons name="dashboard-customize" size={24} color="white" />
        <Feather name="shuffle" size={24} color="white" />
        <FontAwesome name="play" size={24} color="white" />
        <FontAwesome name="pause" size={24} color="white" />
        <FontAwesome name="question-circle" size={24} color="white" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    height: 50,
    alignSelf: "stretch",
    backgroundColor: "#2e2e2e"
  },
  toolbarcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%"
  }
});