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

const getToken = async({phoneNumber, oneTimePassword, setUserLoggedIn}) =>{
  console.log("Phone Number: ", phoneNumber);
  console.log("One Time Pass ", oneTimePassword);
  const tokenResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
    method: 'POST',
    body:JSON.stringify({oneTimePassword, phoneNumber}),
    headers: {
      'Content-type': 'application/json'
    },
  });
  
  const responseCode = tokenResponse.status;//200 code means successful login
  if(responseCode === 500){
    setUserLoggedIn(true);
  }
  console.log("Response: ", responseCode);
  const tokenResponseString = await tokenResponse.text();
  console.log(tokenResponseString);
}


const Login = (props) => {
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
        onPress={()=>{
          getToken({phoneNumber, oneTimePassword, setUserLoggedIn:props.setUserLoggedIn});
        }}
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