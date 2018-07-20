import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';

export default class App extends React.Component<{}> {
  public render() {
    return (
      <View style={styles.app}>
        <Header />
        <Text style={styles.appIntro}>
          To get started, edit src/App.js and save to reload.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appIntro: {
    flex: 2,
    fontSize: 14,
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'center'
  }
});
