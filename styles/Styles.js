import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginVertical: 25,
    letterSpacing: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
    // Substituído shadow* por boxShadow
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Para web
    shadowColor: '#000', // Mantido para mobile
    shadowOffset: { width: 0, height: 2 }, // Mantido para mobile
    shadowOpacity: 0.1, // Mantido para mobile
    shadowRadius: 4, // Mantido para mobile
    elevation: 3, // Mantido para Android
  },
  listaContainer: {
    flex: 1,
    marginTop: 20,
  },
  notaItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    // Substituído shadow* por boxShadow
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Para web
    shadowColor: '#000', // Mantido para mobile
    shadowOffset: { width: 0, height: 2 }, // Mantido para mobile
    shadowOpacity: 0.1, // Mantido para mobile
    shadowRadius: 4, // Mantido para mobile
    elevation: 2, // Mantido para Android
  },
  notaTexto: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  notaData: {
    fontSize: 14,
    color: '#666',
  },
  textoVazio: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;