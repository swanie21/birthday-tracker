import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import styles from '../styles/main';
import ImagePicker from 'react-native-image-picker';

export default class Camera extends Component {
  constructor() {
  super();
    this.state = {
      avatar: null,
    };
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source;

        // You can display the image using either:
        //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        this.setState({
          avatar: source
        });
      }
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View>
          { this.state.avatar === null ? <Image style={styles.avatar} source={require('../img/avatar-placeholder.png')} /> :
            <Image style={styles.avatar} source={this.state.avatar} />
          }
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
