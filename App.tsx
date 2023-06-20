import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { styled } from 'nativewind';


const StyledText = styled(Text);

export default function App() {
  return (
    <View style={styles.container}>
      <StyledText className="font-bold">
        Open up App.js to start working on your app!
      </StyledText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
