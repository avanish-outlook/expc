import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { DefaultSize } from "./size";
const Theme = {

    Dark: {

        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: '#BB86FC',
            primaryDark: '#3700B3',
            secondary: '#03DAC6',
            secondaryDark: '#03DAC6',
            background: "#000",
            surface: "#1E1E1E",
            error: "#B00020",
            primaryText: "#FFF",
            secondaryText: "#676767",
            light: "#FFFFFF",


        },
        size: { ...DefaultSize }


    },
    Light: {

        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#6200EE',
            primaryDark: '#3700B3',
            secondary: '#03DAC6',
            secondaryDark: '#018786',
            background: "#FFFFFF",
            surface: "#FFFFFF",
            error: "#B00020",
            primaryText: "#000",
            secondaryText: "#018786",
            light: "#FFFFFF",

        },
        size: { ...DefaultSize }


    }
}

export default Theme;