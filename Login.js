import {useState} from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";

const sendText = async (phoneNumber) => {
  console.log("PhoneNumber is:",phoneNumber);
  //Using fetch do a POST to https://dev.stedi.me/twofactorlogin/+phoneNumber
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    headers: {
      'Content-type': 'application/text'
    }
  });
  

  const loginResponseText = await loginResponse.text();//converts promise to a string by using await
  console.log('Login Response',loginResponseText);//print the response
};

const getToken = async(phoneNumber, oneTimePassword) =>{//NOT YET COMPLETE, SHOWS HOW TO POST WITH BODY
  console.log('PhoneNumber',phoneNumber);
  console.log('OTP',oneTimePassword);
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body:{
      phoneNumber,
      oneTimePassword
    }
  });
  const token = await loginResponse.text();
  console.log(token);
}


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
        onPress={()=>{getToken(phoneNumber, oneTimePassword)}}
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