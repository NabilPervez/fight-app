import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ListView, FlatList } from 'react-native';

let GOALS = [
    {
        id: 1,
        title: 'Anti Air Consistently'

    },
    {
        id: 2,
        title: '3 Hit Combo Every Opening'

    },
    {
        id: 3,
        title: 'Do NOT Wake Up Super'

    },
];

const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

class WarmUp extends Component {

    constructor() {
        super();

        this.state = {
        }

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
                        title='Set Goal'
                    />
                    <Text style={styles.headerText}>Previous Goals</Text>
                    <FlatList
                        data={GOALS}
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