import { StatusBar, SafeAreaView } from 'react-native';

import { ListPokedex } from './src/listPokemon';
import { Header } from './src/components/Header';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Header/>
      <ListPokedex/>
    </SafeAreaView>
  );
}




