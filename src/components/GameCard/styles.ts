import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 24
  },

  cover: {
    borderRadius: 8,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    height: 320,
    width: 240,
  },

  footer: {
    justifyContent: 'flex-end',
    padding: 16,
    height: 102,
    width: '100%'
  },

  name: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD
  },

  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD
  }
});