import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ name, title }) => (
  <View style={styles.header}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: { alignItems: 'center', padding: 10, backgroundColor: '#282c34' },
  name: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  title: { fontSize: 18, color: '#aaa' },
});

export default Header;

