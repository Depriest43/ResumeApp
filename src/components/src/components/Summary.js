import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary = ({ summary }) => (
  <View style={styles.summary}>
    <Text>{summary}</Text>
  </View>
);

const styles = StyleSheet.create({
  summary: { padding: 10 },
});

export default Summary;
