import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { DuoInfo } from '../DuoInfo';
import { GameController } from 'phosphor-react-native'

import { styles } from './styles';
import { THEME } from '../../theme';

export interface DuoCardProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        label="Chamada de áudio"
        value={data.useVoiceChannel ? "Sim" : "Não"}
      />

      <TouchableOpacity
        onPress={onConnect}
        style={styles.button}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />

        <Text style={styles.title}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
