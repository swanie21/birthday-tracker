import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TextInput, StyleSheet, Image, ListView } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import Button from '../components/Button';
import split from 'split-object';
import { Actions } from 'react-native-router-flux';
import firebase, { contactsRef } from '../firebase';

export default class IndividualContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      notesInput: '',
      notes: []
    };
    this.createNotes = this.createNotes.bind(this);
  }

  componentDidMount() {
    contactsRef.on('value', (snapshot) => {
      let notes = snapshot.val();
      if(!notes) { return this.setState({ notes: [], dataSource: this.state.dataSource.cloneWithRows({}) }); }
      notes = split(notes).map(note => Object.assign({ id: note.key }, note.value));
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(notes),
        notes
      });
    });
  }

  createNotes(id) {
    const notesRef = firebase.database().ref(`contacts/${id}`);
    notesRef.push(this.state.notesInput);
  }

  render() {
    return (
      <View style={styles.individualContact}>
        <View>
          { !this.props.avatar ? <Image style={styles.individualAvatar} source={require('../img/individual-avatar.png')} /> :
            <Image style={styles.individualAvatar} source={{uri: this.props.avatar.uri}} />
          }
        </View>
        <Text style={styles.nameText}>{`${this.props.firstName} ${this.props.lastName}`}</Text>
        <Text style={styles.birthdayText}>🎈{this.props.birthdayDate}</Text>
        <View style={styles.notesField}>
          <AutoGrowingTextInput
            style={styles.notesInput}
            placeholder='Present ideas...'
            onChangeText={notesInput => this.setState({notesInput})}
            value={this.state.notesInput}
          />
        </View>
        <ListView
          style={{backgroundColor: 'red'}}
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={(notes) => <Text>{notes.notesInput}</Text>}
        />
        <Button onPress={e => this.createNotes(this.props.id)} title="Save" />
        <View style={styles.row}>
          <Button onPress={() => Actions.addContacts({firstName: this.props.firstName, lastName: this.props.lastName, birthdayDate: this.props.birthdayDate, avatar: this.props.avatar})} title="Edit" />
          <Button onPress={e => this.props.onPress(this.props.id)} title="Delete" />
        </View>
      </View>
    );
  }
}
