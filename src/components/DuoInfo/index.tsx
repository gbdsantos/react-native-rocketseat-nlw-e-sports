import {
  ColorValue,
  Text,
  View
} from 'react-native';

import { styles } from './styles';
import { THEME } from '../../theme';

interface Props {
  colorValue?: ColorValue;
  label: string;
  value: string;
}

export function DuoInfo({ colorValue = THEME.COLORS.TEXT, label, value }: Props) {
  return (
    <View>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text
        numberOfLines={1}
        style={[styles.value, { color: colorValue }]}
      >
        {value}
      </Text>
    </View>
  );
}
