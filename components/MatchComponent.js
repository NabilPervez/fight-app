import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ListView, FlatList, Picker,} from 'react-native';
// import MATCHUPNOTES from '../shared/matchupNotes';
import GAMES from '../shared/games';

let MATCHUPNOTES = [
    {
        id:1,
        title: 'Threaten with fireball pressure',
        player: 'Ryu',
        opponent: 'Ken',
        game: 'Street Fighter V'
    },
    {
        id:2,
        title: 'AA with cr.HP',
        player: 'Ryu',
        opponent: 'Ken',
        game: 'Street Fighter V'
    },
    {
        id:3,
        title: 'Buffer ',
        player: 'Ryu',
        opponent: 'Ken',
        game: 'Street Fighter V'
    }

];

// displays matchupnotes
function RenderComments({comments}) {
    const renderCommentItem = ({item}) => {
        return (
            
                <Text style={{fontSize: 14}}>
                    {item.title}
                </Text>
            
        );
    };

    return (
        <View>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

class Match extends Component {

    static navigationOptions = {
        title: 'Match'
    }

    //set base values
    state = {game:'', character:'', opponent:''}

    // update values based on user selection
    updateGame = (game) => {
        this.setState({ game: game })
    }

    updateCharacter = (character) => {
        this.setState({ character: character })
    }

     updateOpponent = (opponent) => {
        this.setState({ opponent: opponent })
    }

    // switch state to be used to show which character / opponent picker will display based on game selected
    renderCharacterSwitch(game) {
        switch(game) {
          case 'Street Fighter V':
            return <Picker
            selectedValue = {this.state.character} 
            onValueChange = {this.updateCharacter}
            style={styles.pickerBar}
            >
            <Picker.item label='Ryu' value='Ryu'/>
            <Picker.item label='Ken' value='Ken'/>
            <Picker.item label='Akuma' value='Akuma'/>                    
            </Picker>;
        case 'Guilty Gear STRIVE':
            return <Picker
            selectedValue = {this.state.character} 
            onValueChange = {this.updateCharacter}
            style={styles.pickerBar}
            >
            <Picker.item label='Sol' value='Sol'/>
            <Picker.item label='Ky' value='Ky'/>
            <Picker.item label='Faust' value='Faust'/>                    
            </Picker>;
        case 'Dragonball Fighter Z':
            return <Picker
            selectedValue = {this.state.opponent} 
            onValueChange = {this.updateOpponent}
            style={styles.pickerBar}
            >
            <Picker.item label='Goku' value='Goku'/>
            <Picker.item label='Vegeta' value='Vegeta'/>
            <Picker.item label='Gohan' value='Gohan'/>                    
            </Picker>;
          default:
            return <Text>Select Game First</Text>;
        }
    }

    renderOpponentSwitch(game) {
        switch(game) {
          case 'Street Fighter V':
            return <Picker
            selectedValue = {this.state.character} 
            onValueChange = {this.updateCharacter}
            style={styles.pickerBar}
            >
            <Picker.item label='Ryu' value='Ryu'/>
            <Picker.item label='Ken' value='Ken'/>
            <Picker.item label='Akuma' value='Akuma'/>                    
            </Picker>;
        case 'Guilty Gear STRIVE':
            return <Picker
            selectedValue = {this.state.character} 
            onValueChange = {this.updateCharacter}
            style={styles.pickerBar}
            >
            <Picker.item label='Sol' value='Sol'/>
            <Picker.item label='Ky' value='Ky'/>
            <Picker.item label='Faust' value='Faust'/>                    
            </Picker>;
        case 'Dragonball Fighter Z':
            return <Picker
            selectedValue = {this.state.opponent} 
            onValueChange = {this.updateOpponent}
            style={styles.pickerBar}
            >
            <Picker.item label='Goku' value='Goku'/>
            <Picker.item label='Vegeta' value='Vegeta'/>
            <Picker.item label='Gohan' value='Gohan'/>                    
            </Picker>;
          default:
            return <Text>Select Game First</Text>;
        }
    }
    
    render() {
        return (
            <View>
                <Text style={styles.titleText}>Match</Text>
                {/* Drop down for games */}
                <Text style={styles.headerText}>Game</Text>
                <Picker
                    selectedValue = {this.state.game} 
                    onValueChange = {this.updateGame}
                    style={styles.pickerBar}
                >
                    <Picker.item label='Street Fighter V' value='Street Fighter V'/>
                    <Picker.item label='Guilty Gear STRIVE' value='Guilty Gear STRIVE'/>
                    <Picker.item label='Dragonball Fighter Z' value='Dragonball Fighter Z'/>                    
                </Picker>
                {/* Drop down for character */}
                    <Text style={styles.headerText}>Character</Text>
                    {this.renderCharacterSwitch(this.state.game)}

                    {/* Drop down for opponent */}
                    <Text style={styles.headerText}>Opponent</Text>
                    {this.renderOpponentSwitch(this.state.game)}
                
                {/* Matchup Note */}
                <Text style={styles.headerText}>Matchup Note</Text>
                <TextInput
                style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
                />
                {/* Previous Notes */}
                <Text style={styles.headerText}>Previous Notes</Text>
                {/* Method to display previous notes */}
                <RenderComments comments={MATCHUPNOTES}/>
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
    },
    pickerBar:{
        height: 30, 
        width: 400
    }
  });

export default Match;