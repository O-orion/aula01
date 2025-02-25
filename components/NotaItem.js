import { View, Text } from 'react-native';
import styles from '../styles/Styles';

const NotaItem = ({ nota }) => {
  return (
    <View style={styles.notaItem}>
      <Text style={styles.notaTexto}>{nota.texto}</Text>
      <Text style={styles.notaData}>{nota.data}</Text>
    </View>
  );
};

export default NotaItem;