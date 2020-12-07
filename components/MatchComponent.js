import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ListView, FlatList, Picker } from 'react-native';
import MATCHUPNOTES from '../shared/matchupNotes';
import GAMES from '../shared/games';

const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

class Match extends Component {

    static navigationOptions = {
        title: 'Match'
    }

    render() {
        return (
            <View>
                <Text style={styles.titleText}>Match</Text>
                {/* Drop down for games */}
                <Text style={styles.headerText}>Game</Text>
                <Picker>
                    <Picker.item label='PICK YOUR GAME' value='0'/>
                    <Picker.item label='Street Fighter V' value='1'/>
                    <Picker.item label='Guilty Gear STRIVE' value='2'/>
                    <Picker.item label='Dragonball Fighter Z' value='3'/>                    
                </Picker>
                {/* Drop down for character */}
                <Text style={styles.headerText}>Character</Text>
                <Picker>
                    <Picker.item label='PICK YOUR CHARACTER' value='0'/>
                    <Picker.item label='Ryu' value='1'/>
                    <Picker.item label='Ken' value='2'/>
                    <Picker.item label='Akuma' value='3'/>                    
                </Picker>
                {/* Drop down for opponent */}
                <Text style={styles.headerText}>Opponent</Text>
                <Picker>
                    <Picker.item label='PICK YOUR OPPONENT' value='0'/>
                    <Picker.item label='Ryu' value='1'/>
                    <Picker.item label='Ken' value='2'/>
                    <Picker.item label='Akuma' value='3'/>
                </Picker>
                {/* Matchup Note */}
                <Text style={styles.headerText}>Matchup Note</Text>
                <TextInput
                style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
                />
                <Button
                    title='Save Note'
                />
                {/* Previous Notes */}
                <Text style={styles.headerText}>Previous Notes</Text>
                    <FlatList
                        data={MATCHUPNOTES}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
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