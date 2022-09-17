import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },

  content: {
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
    width: 311
  },

  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,
  },

  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginBottom: 8,
    marginTop: 24
  },

  discordButton: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    height: 48,
    width: 231,
  },

  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});
