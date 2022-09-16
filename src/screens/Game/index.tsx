import {
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { THEME } from '../../theme';

import { GameParams } from '../../@types/navigation';

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const { bannerUrl, title } = route.params as GameParams;

  function handleGoBackScreen() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBackScreen}>
            <Entypo
              color={THEME.COLORS.CAPTION_300}
              name="chevron-thin-left"
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Image
          resizeMode="cover"
          source={{ uri: bannerUrl }}
          style={styles.cover}
        />

        <Heading
          subtitle="Conecte-se e comece a jogar!"
          title={title}
        />
      </SafeAreaView>
    </Background>
  );
}
