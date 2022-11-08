import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Feather } from '@expo/vector-icons'; 

export default function FaqModal({faqOpen, setFaqOpen}) {
  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={faqOpen}
    onRequestClose={() => {
      Alert.alert("Selector modal has been closed.");
      setFaqOpen(false);
    }}
    onBackdropPress={() => setFaqOpen(false)}
    >
      <TouchableOpacity 
        style={{ flex: 1 }}
        activeOpacity={1} 
        onPress={() => {
          setFaqOpen(false)
        }}
      >
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <ScrollView style={styles.contentcontainer}>
                <Pressable>
                  <View style={styles.titlecontainer}>
                    <Text style={styles.faqtitle}>FAQ</Text>
                    <Pressable
                      onPress={() => setFaqOpen(false)}
                    >
                      <Feather name="x" size={24} color="white" />
                    </Pressable>
                  </View>
                  <View style={styles.spacer}/>
                  <Text style={styles.questionText}>
                    I don’t see my college radio station. Can you add it?
                  </Text>
                  <Text style={styles.answerText}>
                    Absolutely! It’s pretty easy for me to add new stations, and I’m always looking for new radio stations to listen to. Feel free to suggest stations via this form!
                  </Text>
                  <View style={styles.spacer}/>
                  <Text style={styles.questionText}>
                    Why isn't my station loading?
                  </Text>
                  <Text style={styles.answerText}>
                    I've done my best to get stable audio streams for every station, but sometimes security settings prevent the data from being transferred, and sometimes stations just go down on their end.
                  </Text>
                  <View style={styles.spacer}/>

                  <Text style={styles.questionText}>
                    The app isn’t working on my device / I’ve spotted a bug / I’d like to see a new feature.
                  </Text>
                  <Text style={styles.answerText}>
                    That’s awesome (or I’m sorry)! I’m still learning how to build web apps and I love getting feedback! If you have a Github account, you can open an issue directly on the Campus FM repo, or you can get in touch with me at hello.campusfm@gmail.com.
                  </Text>
                </Pressable>
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#2e2e2e",
    padding: 25,
    height: "65%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  questionText: {
    color: "white",
    marginBottom: 15,
    fontSize: 20,
    fontFamily: "ShareTechMono",
  },
  answerText: {
    color: "#f0f0f0",
    fontSize: 20,
    fontFamily: "ShareTechMono",
    borderBottomColor: "#b0b0b0",
    borderBottomWidth: 1
  },
  titlecontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  faqtitle: {
    fontFamily: "ShareTechMono",
    color: "white",
    fontSize: 30,
  },
  spacer: {
    height: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#b0b0b0",
    marginBottom: 25,
  }
})