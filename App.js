import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [nota, setNota] = useState('');
  const [notaSalva, setNotaSalva] = useState('');

  const salvarNota = () => {
    setNotaSalva(nota);
    setNota('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Mini Diário!</Text>
      <TextInput style={styles.input} placeholder='Escreva sua nota aqui...' value={nota} onChangeText={setNota} />
      <Button title="Salvar Nota" onPress={salvarNota} color="#4CAF50" />
      <ScrollView style={styles.notaContainer} >
        {notaSalva ? (
          <Text style={styles.notaTexto} >Nota Salva: {notaSalva}</Text>
        ): (
          <Text style={styles.textoVazio} >Nenhuma nota salva ainda.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  notaContainer: {
    flex: 1,
    marginTop: 20,
  },
  notaTexto: {
    fontSize: 18,
    color: '#444',
  },
  textoVazio: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center'
  }
});
