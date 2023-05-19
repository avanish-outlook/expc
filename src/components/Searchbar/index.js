import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Searchbar as PaperSearchbar, SearchbarProps} from 'react-native-paper';
import {styles} from './styles.js';

const Searchbar = (props: SearchbarProps) => {
  return (
    <PaperSearchbar
      mode="outlined"
      {...props}
      style={{...styles.container, ...props.style}}
    />
  );
};

export default Searchbar;
