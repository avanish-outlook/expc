import { useTheme } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';


const Card = props => {
    const { colors, size } = useTheme();
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};



const stylesSheet = (colors, size) => StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: colors.surface,
        padding: 20,
        borderRadius: 10,
        margin: 4
    }


})

export default Card;