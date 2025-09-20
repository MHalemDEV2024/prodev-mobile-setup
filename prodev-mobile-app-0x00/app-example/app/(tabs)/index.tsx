import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First App Created</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background, // using theme color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.text, // using theme color
  },
});
