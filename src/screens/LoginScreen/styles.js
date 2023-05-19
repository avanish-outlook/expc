import { StyleSheet } from 'react-native';

const stylesSheet = (colors, size) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 10,
  },
  imgLogo: {
    width: 200,
    height: 200,
    display: 'flex',
    alignSelf: 'center',
  },
  alreadyAccount: {
    display: 'flex',
    alignSelf: 'center',
    color: colors.secondaryText
  },
})


export default stylesSheet;