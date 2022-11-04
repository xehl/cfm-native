import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import ModalCard from "./modalcard";

export default function SelectorModal({selectorOpen, setSelectorOpen}) {
  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={selectorOpen}
    onRequestClose={() => {
      Alert.alert("Selector modal has been closed.");
      setSelectorOpen(!selectorOpen);
    }}
    onBackdropPress={() => setSelectorOpen(false)}
    >
      <TouchableOpacity 
        style={{ flex: 1 }}
        activeOpacity={1} 
        onPress={() => {
          setSelectorOpen(false)
        }}
      >
        <View style={styles.centeredView}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Placeholder for selector</Text>
            <ModalCard />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setSelectorOpen(!selectorOpen)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
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
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
})