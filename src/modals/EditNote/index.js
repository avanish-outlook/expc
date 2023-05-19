import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button as PaperButton, ButtonProps} from 'react-native-paper';
import {styles} from './styles.js';

const Button = (props: ButtonProps) => {
  return (
    <PaperButton
      mode="contained"
      {...props}
      style={{...styles.container, ...props.style}}
    />
  );
};

export default Button;
