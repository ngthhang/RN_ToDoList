import React from 'react';
import ModalScreen from './src/screen/ModalScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation/RootStack';

class App extends React.Component {
  componentDidMount(){
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.disableYellowBox = true;
  }
  render(){
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )}
}
export default App;
