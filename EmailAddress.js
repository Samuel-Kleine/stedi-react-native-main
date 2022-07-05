import React from "react";
import { StyleSheet, Text, View,} from 'react-native';


const getEmail = async (token)=> {
 const emailResponse = await fetch('https://dev.stedi.me/validate/'+token,{
    method: 'GET',
    headers: {
        'Content-type': 'application/text'
    }
})
    const emailResponsetext = await emailResponse.text();
    console.log('Email Response', emailResponsetext);
};


function EmailAddress(props) {
    return (
        <View style={styles.emailAddress}>
            <Text style={styles.text}>
                {getEmail(props.token)}
            </Text>
        </View>
    );
}
export default EmailAddress

const styles = StyleSheet.create({
    emailAddress: {
        paddingRight: 10,
    },
    text: {
        color: 'black',
        fontWeight: '600',
        fontSize: 25
    }
})



//https://dev.stedi.me/validate/ +tokenResponseString