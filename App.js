/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native';
import Navigation from './src/navigations/navigation';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                hidden = {false}
                backgroundColor= {'white'}
            />
    <Navigation/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  }
});

export default App;
