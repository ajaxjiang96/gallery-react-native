import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import SearchableHeader from './components/SearchableHeader'
import ImageViewer from './components/ImageViewer';
import Thumbnails from './components/Thumbnails';
// store.subscribe(() => console.log(store.getState()))
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <SearchableHeader />
        <ImageViewer />
        <Thumbnails />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
