export const colors = {
  backgroundColor: 'skyblue',
};

export const LightThemeColors = {
  primaryColor: '#a42cd6',
  secondaryColor: "#c179b9",
  activeColor: "#a42cd6",
  dangerColor: '#fff'
}

export const DarkThemeColors = {
  primaryColor: '#fff',
  secondaryColor: "gray",
  activeColor: "#a42cd6",
  dangerColor: '#fff'
}


export function getThemeColors(mode) {
  return mode === 'light' ? LightThemeColors : DarkThemeColors
}