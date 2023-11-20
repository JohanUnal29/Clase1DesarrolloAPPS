import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola coder</Text>
      <TextInput>Mi primera chamba</TextInput>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Presionar</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   buttonContainer: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });
