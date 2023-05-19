import {Alert, StyleSheet, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from '../../components';
import {styles} from './styles.js';
import Modal from 'react-native-modal';
import {Text} from 'react-native-paper';
import {IconButton, MD3Colors} from 'react-native-paper';

const CreateNote = ({modalVisible, setModalVisible}) => {
  return (
    <Modal isVisible={modalVisible}>
      <View style={styles.container}>
        <Input
          placeholder="Title"
          outlineColor="rgba(0,0,55,0.08)"
          placeholderTextColor="rgba(0,0,60,0.38)"
        />

        <Input
          placeholder="Your note..."
          multiline={true}
          numberOfLines={10}
          outlineColor="rgba(0,0,55,0.08)"
          placeholderTextColor="rgba(0,0,60,0.38)"
        />

        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <IconButton
            mode="outlined"
            icon="undo"
            onPress={() => setModalVisible(false)}
          />
          <IconButton
            mode="contained"
            icon="check"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CreateNote;
