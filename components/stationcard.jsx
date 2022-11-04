import { StyleSheet, Text, View, Image } from "react-native";
import { Divider } from 'react-native-paper';


export default function StationCard({ station }) {

  return (
    <View style={styles.card}>
      <View style={styles.cardcontent}>
        <Image
          style={styles.logo}
          source={{uri: station.college_image}}
        />
        <Divider style={{ width: 2, height: 120 }}/>
        <View style={styles.textcontainer}>
          <Text style={styles.stationtext}>{station.call_sign} {station.broadcast_frequency}</Text>
          <Text style={styles.collegetext}>{station.college_name}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 145,
    width: "92%",
    backgroundColor: "white",
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
    width: 75,
    margin: 20,
    resizeMode: "contain"
  }
});