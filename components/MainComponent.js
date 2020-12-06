import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import Match from './MatchComponent';
import TheLab from './TheLabComponent';
import WarmUp from './WarmUpComponent';


class Main extends Component {

    render() {
        return (
            <ScrollView>
                <TheLab />
            </ScrollView>
        );
    }
}

export default Main;