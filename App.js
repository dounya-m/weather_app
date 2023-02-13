import { StyleSheet, Text, View } from 'react-native';
import WeatherScreen from './src/screens/weather/WeatherScreen'
export default function App() {

  return (
    <View style={styles.container}>
      <WeatherScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },

});
