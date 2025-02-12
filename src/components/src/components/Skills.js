import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Skills = ({ skills }) => (
  <View style={styles.skills}>
    <Text>Skills:</Text>
    {skills.map((skill, index) => (
      <Text key={index}>{skill}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  skills: { padding: 10 },
});

export default Skills;
