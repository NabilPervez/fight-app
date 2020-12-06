import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Match from './MatchComponent';
import TheLab from './TheLabComponent';
import WarmUp from './WarmUpComponent';


class Main extends Component {

    render() {
        return (
            <View>
                <Text>Main</Text>
                <WarmUp/>
                <Match/>
                <TheLab/>
            </View>
        );
    }
}

export default Main;