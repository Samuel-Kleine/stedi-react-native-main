import React from "react";
import { StyleSheet, Text, View,} from 'react-native';


function EmailAddress(props) {
    return (
        <View style={styles.emailAddress}>
            <Text style={styles.text}>youwhat@fakemail.com</Text>
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