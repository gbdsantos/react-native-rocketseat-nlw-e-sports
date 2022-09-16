import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    fetch('http://192.168.1.19:3333/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  function handleOpenGameScreen() {
    navigate("game");
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Encontre o seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={handleOpenGameScreen}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
}
