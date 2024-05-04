import { StyleSheet } from 'react-native'
export const hairlineWidth = StyleSheet.hairlineWidth
export default function(theme) {
  const isDarkMode = theme === 'dark';
  const backgroundDefault = isDarkMode ? '#141618' : '#ffffff';
  const backgroundAlternative = isDarkMode ? '#24272A' : '#F2F4F6';
  const textDefault = isDarkMode ? '#ffffff' : '#24272A';
  const textAlternative = isDarkMode ? '#FAFBFC' : '#535A61';
  const overlay = isDarkMode ? '#FFFFFF66' : '#00000099';
  return {
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.7,
      backgroundColor: overlay
    },
    wrapper: {
      flex: 1,
      flexDirection: 'row'
    },
    body: {
      flex: 1,
      alignSelf: 'flex-end',
      backgroundColor: backgroundAlternative
    },
    titleBox: {
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundDefault
    },
    titleText: {
      color: textDefault,
      fontSize: 14
    },
    messageBox: {
      height: 30,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundDefault
    },
    messageText: {
      color: textAlternative,
      fontSize: 12
    },
    buttonBox: {
      height: 50,
      marginTop: hairlineWidth,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundDefault
    },
    buttonText: {
      fontSize: 18
    },
    cancelButtonBox: {
      height: 50,
      marginTop: 6,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundDefault
    }
  }
}
