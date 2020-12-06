import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ListView, FlatList } from 'react-native';

const GAMES = [
    {
        id: 1,
        title: 'Street Fighter V',
        game: 'Guilty Gear STRIVE',
        characters: ['Ryu','Ken','Akuma']

    },
    {
        id: 2,
        title: 'Guilty Gear STRIVE',
        game: 'Guilty Gear STRIVE',
        characters: ['Sol','Ky','Faust']
    },
    {
        id: 3,
        title: 'Dragonball Fighter Z',
        game: 'Guilty Gear STRIVE',
        characters: ['Goku','Vegeta','Gohan']
    },
];

let MATCHUPNOTES = [
    {
        id:1,
        title: 'Stand outside Ky slash range to threaten',
        player: 'Sol',
        opponent: 'Ky',
        game: 'Guilty Gear STRIVE'
    }

];

class Match extends Component {

    render() {
        return (
            <View>
                <Text style={styles.titleText}>Match</Text>
                <Text style={styles.headerText}>Game</Text>
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Roboto"
    },
    titleText: {
        fontFamily: "Roboto",
        fontSize: 25,
        fontWeight: "bold"
    },
    headerText:{
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "bold"
    }
  });

export default Match;