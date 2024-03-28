import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

const Flex = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.style1} />
      <View style={styles.style2} />
      <View style={styles.style3} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  style1: {
    flex: 1,
    backgroundColor: 'orange'
  },
  style2: {
    flex: 2,
    backgroundColor: 'red'
  },
  style3: {
    flex: 3,
    backgroundColor: 'blue'
  }
});

export default Flex;