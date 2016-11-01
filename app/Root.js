import React, { Component } from 'react';
import styles from './styles/main';
import ContactCard from './components/ContactCard';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import Main from './screens/Main';
import { Actions } from 'react-native-router-flux';
// import firebase, { contactsRef, provider } from '../firebase';

export default class birthdayTracker extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     user: null,
  //   };
  // }
  //
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({ user });
  //   });
  // }
  //
  // triggerSignOut() {
  //   firebase.auth().signOut();
  //   this.setState({ user: null });
  // }

  render() {
    // const { user } = this.state;
    // if(user) {
    //   return (
    //     <Main />
    //   );
    // }
    return (
      <Main />
      // <View style={styles.loginScreen}>
      //   <Text style={styles.appTitle}>Saves the Day</Text>
      //   <Image source={require('./img/present.png')} />
      //   <TouchableHighlight
      //     style={styles.loginButton}
          // onPress={() => firebase.auth().signInWithCredential(provider.credential(R63gFHdzcXy14dc1tQhnnbxi))}
      //     underlayColor='#7ac4ba'>
      //     <Text style={styles.loginButtonText}>Login with Google</Text>
      //   </TouchableHighlight>
      // </View>
    );
  }
}
