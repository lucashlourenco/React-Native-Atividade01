import { StyleSheet, View } from 'react-native';
import TelaDeLogin from './login';
import TelaDeCadastro from './cadastro';
import TelaDeRecuperacao from './recuperacao';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaDeLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6'
  },
});
