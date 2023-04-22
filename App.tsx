import { StatusBar, SafeAreaView } from 'react-native';

import { ListPokedex } from './src/listPokemon';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <ListPokedex/>
    </SafeAreaView>
  );
}




