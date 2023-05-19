import {Alert, StyleSheet, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from '../../components';
import {styles} from './styles.js';
import Modal from 'react-native-modal';
import {Text} from 'react-native-paper';
import {IconButton, MD3Colors} from 'react-native-paper';
const ViewNote = ({item, modalVisible, setModalVisible}) => {
  return (
    <Modal isVisible={modalVisible}>
      <View style={styles.container}>
        <Text>{item.index}</Text>

        <Input
          disabled={true}
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
            icon="cancel"
            onPress={() => setModalVisible(false)}
          />
          <IconButton
            mode="contained"
            icon="cancel"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ViewNote;
