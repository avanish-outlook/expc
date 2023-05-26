import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextProps, Text as PaperText } from 'react-native-paper';
import { styles } from './styles.js';
import { useTheme } from '@react-navigation/native';

const UiText = (props: TextProps) => {
  const { colors } = useTheme()

  let color;

  if (props.color) {
    if (props.color === 'p') {
      color = colors.primaryText
    } else if (props.color === 's') {
      color = colors.secondaryText
    } else if (props.color === 'd') {
      color = colors.error
    }
  } else {
    color = colors.primaryText;
  }

  return (
    <PaperText
      // theme={{ colors: { text: colors.primaryText, placeholder: colors.secondaryText, background: colors.surface } }}
      //  placeholderTextColor={colors.secondaryText}

      {...props}

      style={{ color: color, ...props.style }}

    >{props.children}</PaperText>
  );
};

export default UiText;
