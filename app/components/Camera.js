'use strict';
import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Platform } from 'react-native';
import styles from '../styles/main';
import ImagePicker from 'react-native-image-picker';
import avatarPlaceholder from '../img/avatar-placeholder.png';

const Camera = (props) => {

  const selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 125,
      maxHeight: 125,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel || response.error) return;
      const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
      props.setAvatar(source);
    });
  };

  return (
    <View style={styles.centerAvatar}>
      <TouchableOpacity onPress={selectPhotoTapped.bind(this)}>
        <View>
        { props.avatar === null ? <Image style={styles.avatar} source={avatarPlaceholder} /> :
          <Image style={styles.avatar} source={props.avatar} />
        }
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Camera;
