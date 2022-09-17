import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { Heading } from '../Heading';

import { CheckCircle } from 'phosphor-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscordUserToClipboard() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert("Discord", "Nome de usuário copiado pra você colocar no Discord.")
    setIsCopping(false);
  }

  return (
    <Modal
      animationType="fade"
      statusBarTranslucent
      transparent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeIcon}
          >
            <MaterialIcons
              color={THEME.COLORS.CAPTION_500}
              name="close"
              size={20}
            />
          </TouchableOpacity>


          <CheckCircle
            color={THEME.COLORS.SUCCESS}
            size={64}
            weight="bold"
          />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>

          <TouchableOpacity
            disabled={isCopping}
            onPress={handleCopyDiscordUserToClipboard}
            style={styles.discordButton}
          >
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

  );
}
