import { View, Text } from 'react-native'
import React from 'react'

const lightTheme = {
    borderColor: "#dfdfdf",
    primaryText: '#000',
    primaryColor: '#8A2BE2'
}
const darkTheme = {

}

const useAppTheme = () => {

    let isDarkTheme = false;

    let theme = isDarkTheme ? darkTheme : lightTheme;


    return { theme }
}

export default useAppTheme