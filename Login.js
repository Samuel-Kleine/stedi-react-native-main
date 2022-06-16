import {useState} from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";

const sendText = async (phoneNumber) => {
  //Using fetch do a POST to https://dev.stedi.me/twofactorlogin/+phoneNumber
  await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    }
  });
  console.log("PhoneNumber is:",phoneNumber);
};

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
        placeholderTextColor='#808080'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{sendText(phoneNumber)}}
      >
        <Text>Send Text</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1111"
        placeholderTextColor='#808080'
        keyboardType="numeric"
        secureTextEntry={true}
      />  
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{sendText(phoneNumber)}}
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
      backgroundColor: '#87ceeb',
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