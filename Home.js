import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';
import EmailAddress from './EmailAddress.js';

const Home = (props) => {
  const [userName, setUserName] = useState(props.userName)
  return (
    <View>
      <Bar/>
      <EmailAddress userName={props.userName} />
      <Icons />
    </View>
  );
};

export default Home;
