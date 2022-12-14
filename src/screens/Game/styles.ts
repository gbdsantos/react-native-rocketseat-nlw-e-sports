import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 28,
    paddingHorizontal: 32,
    width: '100%',
  },

  logo: {
    height: 40,
    width: 72
  },

  right: {
    height: 20,
    width: 20
  },

  cover: {
    borderRadius: 8,
    marginTop: 32,
    height: 160,
    width: 311
  },

  containerList: {
    width: '100%'
  },

  contentList: {
    alignItems: 'flex-start',
    paddingLeft: 32,
    paddingRight: 64
  },

  emptyList: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM
  },

  emptyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
