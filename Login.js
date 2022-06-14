import {useState} from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style={styles.mainView}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="801-867-5309"
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1111"
        keyboardType="numeric"
        secureTextEntry={true}
      />  
      <TouchableOpacity
        style={styles.button}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      color: '#000000',
      backgroundColor: '#fd5e53',
      padding: 10,
    },
    mainView: {
      marginTop:100
    },
    button: {
      alignItems: "center",
      margin: 12,
      backgroundColor: "#228B22",
      padding: 10
    },
  });
  
  export default Login;