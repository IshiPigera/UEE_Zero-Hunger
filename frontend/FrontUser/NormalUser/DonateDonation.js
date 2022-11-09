import React from 'react';
import { View, Text } from 'react-native';

export default class DonateDonation extends React.Component {


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => alert('This is the "Home" screen.')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Make Donation</Text>
            </View>
        )
    }

}

