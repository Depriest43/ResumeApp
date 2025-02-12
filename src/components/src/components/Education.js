import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Education = ({ schools }) => (
  <View style={styles.education}>
    {schools.map((school, index) => (
      <View key={index} style={styles.school}>
        <Text style={styles.degree}>{school.degree} - {school.school}</Text>
        <Text>{school.years}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  education: { padding: 10 },
  school: { marginBottom: 5 },
  degree: { fontWeight: 'bold' },
});

export default Education;
