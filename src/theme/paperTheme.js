import { DarkTheme as PaperDark, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const light = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,

    roundness: 1,
    // Specify custom property in nested object
    colors: {
        // myOwnColor: '#BADA55',
    }
};


const dark = {
    ...PaperDark,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
        // myOwnColor: '#BADA55',
    }
};

export function getPaperTheme(mode = 'dark') {
    return mode === 'dark' ? dark : light;
}