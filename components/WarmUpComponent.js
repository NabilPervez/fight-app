import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ListView, FlatList } from 'react-native';
import {MATCHUPNOTES} from '../shared/matchupNotes';
import {GAMES} from '../shared/games';
import {GOALS} from '../shared/goals';

const Item = ({ title }) => 
    (
    <View>
      <Text>{title}</Text>
    </View>
    );
  
const renderItem = ({ item }) => 
    (
        <Item title={item.title} />
    );

class WarmUp extends Component {

    static navigationOptions = {
        title: 'WarmUp'
    }

    constructor() {
        super();
        this.state = {
            matchupnotes: MATCHUPNOTES,
            games: GAMES,
            goals: GOALS
        };

      }

    render() {

        return (
            <View>
                    <Text style={styles.titleText}>Warm Up</Text>
                    <Text style={styles.headerText}>Today's Goal</Text>
                    <TextInput
                    style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <Button
                        title='Save Goal'
                    />
                    <Text style={styles.headerText}>Previous Goals</Text>
                    <FlatList
                        data={this.state.goals}
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

export default WarmUp;