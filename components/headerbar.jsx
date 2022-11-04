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
    height: 50,
    marginTop: -5,
    alignSelf: "stretch",
    backgroundColor: "#2e2e2e",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  toolbarcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%"
  }
});