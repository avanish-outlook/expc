import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import { styles } from './styles.js';
import { useTheme } from '@react-navigation/native';

const Input = (props: TextInputProps) => {
  const { colors } = useTheme()
  console.log("INPUT COLORS", colors)
  return (
    <TextInput
      mode="outlined"
      theme={{ colors: { text: colors.primaryText, placeholder: colors.secondaryText, background: colors.surface } }}
      //  placeholderTextColor={colors.secondaryText}

      {...props}

      style={{ ...styles.container, backgroundColor: colors.surface, color: colors.secondaryText, ...props.style }}

    />
  );
};

export default Input;
