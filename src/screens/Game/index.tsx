import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { THEME } from '../../theme';

import { GameParams } from '../../@types/navigation';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const { bannerUrl, id, title } = route.params as GameParams;

  function handleGoBackScreen() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.1.19:3333/games/${id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data));
  }, []);

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

        <FlatList
          contentContainerStyle={styles.contentList}
          data={duos}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => { }}
            />
          )}
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
        />
      </SafeAreaView>
    </Background>
  );
}
