import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import NotaItem from './components/NotaItem';
import styles from './styles/Styles';

export default function App() {
  const [nota, setNota] = useState('');
  const [notasSalvas, setNotasSalvas] = useState([]); // Corrigido "notasSalva" para "notasSalvas"

  const salvarNota = () => {
    if (nota.trim() === '') return;
    const novaNota = {
      id: Date.now().toString(),
      texto: nota, // Corrigido "text" para "texto"
      data: new Date().toLocaleString(),
    };
    setNotasSalvas([novaNota, ...notasSalvas]); // Corrigido "notasSalva" para "notasSalvas"
    setNota('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Mini Diário!</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva sua nota aqui..."
        value={nota}
        placeholderTextColor="#888"
        onChangeText={setNota}
      />
      <Button title="Salvar Nota" onPress={salvarNota} color="#4CAF50" />
      <FlatList
        data={notasSalvas} // Corrigido "notasSalva" para "notasSalvas"
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInDown.delay(index * 100)}>
            <NotaItem nota={item} />
          </Animated.View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.listaContainer}
        ListEmptyComponent={
          <Text style={styles.textoVazio}>Nenhuma nota salva ainda.</Text> // Corrigido "text" para "Text"
        }
      />
    </View>
  );
}