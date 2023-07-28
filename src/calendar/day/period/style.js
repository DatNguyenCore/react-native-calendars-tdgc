import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../../style';

const FILLER_HEIGHT = 48;

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };

  return StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      alignSelf: 'stretch',
      marginLeft: -1,
    },
    base: {
      width: FILLER_HEIGHT,
      height: FILLER_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fillers: {
      position: 'absolute',
      height: FILLER_HEIGHT,
      flexDirection: 'row',
      left: 0,
      right: 0,
    },
    leftFiller: {
      backgroundColor: appStyle.calendarBackground,
      height: FILLER_HEIGHT,
      flex: 1,
    },
    rightFiller: {
      backgroundColor: appStyle.calendarBackground,
      height: FILLER_HEIGHT,
      flex: 1,
    },
    text: {
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      fontSize: 14,
      fontWeight: '600',
      fontFamily: 'Cabin',
    },
    dotContainer: {
      position: 'absolute',
      bottom: 3,
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
      borderWidth: 2,
      borderColor: '#8E7046',
      borderRadius: 24,
    },
    todayText: {
      fontWeight: '600',
      color: theme.todayTextColor || appStyle.dayTextColor
    },
    selectedText: {
      color: appStyle.selectedDayTextColor,
    },
    disabledText: {
      color: appStyle.textDisabledColor,
    },
    inactiveText: {
      color: appStyle.textInactiveColor,
    },
    ...(theme['stylesheet.day.period'] || {}),
  });
}
