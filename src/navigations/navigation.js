import * as React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import InitView from '../screens/InitView';
import PokemonDetails from '../screens/PokemonDetails';

const Stack = createNativeStackNavigator();


const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background:Platform.OS === 'ios' ?  'white' :'transparent'
    },
  };

const Navigation =() => {
return(
    <NavigationContainer
      theme={MyTheme}
    >
        <Stack.Navigator screenOptions={{gestureEnabled:false}}>
           <Stack.Screen name="InitView" options={{ title: 'Pokemons' }} component={InitView}/>
           <Stack.Screen name="PokemonDetails" options={{ title: 'Detalle' }}  component={PokemonDetails}/>
        </Stack.Navigator>
    </NavigationContainer>
)

}
export default  Navigation;
