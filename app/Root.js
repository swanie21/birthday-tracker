import firebase, { contactsRef } from './firebase';
import React, { Component } from 'react';
import styles from './styles/main';
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native';
import ContactList from './screens/ContactList';
import AddContact from './screens/AddContact';
import Main from './screens/Main';

export default class Root extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     user: null,
  //     email: null,
  //     password: null
  //   };
  // }
  //
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({ user });
  //   });
  // }
  //
  // checkLoginInput() {
  //   if(this.state.email === null || this.state.password === null) { return false; }
  //   else { return true; }
  // }
  //
  // login() {
  //   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(() => {
  //     alert('Invalid login information, please try again');
  //   })
  //   .then(this.goToContactList());
  // }
  //
  // goToContactList() {
  //   this.props.navigator.push({
  //     component: ContactList,
  //     title: 'Saves the Day'
  //   });
  // }

  render() {
    // const { user } = this.state;
    // if(user) {
      return (
        <ContactList />
      );
    }
  }
    // return (
      // <View style={styles.loginScreen}>
      //   <Text style={styles.appTitle}>Saves the Day</Text>
      //   <Image source={require('./img/present.png')} />
      //   <TextInput
      //     style={styles.inputFields}
      //     value={this.state.email}
      //     onChangeText={(email) => this.setState({email})}
      //     placeholder='Email'
      //   />
      //   <TextInput
      //     style={styles.inputFields}
      //     value={this.state.password}
      //     onChangeText={(password) => this.setState({password})}
      //     placeholder='Password'
      //   />
      //   <TouchableHighlight
      //     style={styles.loginButton}
      //     underlayColor='#7ac4ba'
      //     onPress={() => {
      //       if(this.checkLoginInput()) { this.login() }
      //     else { alert('Please fill in both fields'); }
      //   }}>
      //     <Text style={styles.loginButtonText}>Login with Email</Text>
      //   </TouchableHighlight>
      // </View>
//     );
//   }
// }
