import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from './components/Header';
import Contact from './components/Contact';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header name="Jack Smith" title="Software Engineer" />
        <Contact email="jack.smith@example.com" phone="555-123-4567" />
        <Summary summary="Passionate software engineer with experience in full-stack development, cloud computing, and AI." />
        <Experience jobs={[
          { position: "Senior Developer", company: "Tech Solutions Inc.", years: "2021-Present" },
          { position: "Software Engineer", company: "CloudTech", years: "2018-2021" },
          { position: "Junior Developer", company: "InnovateX", years: "2015-2018" }
        ]} />
        <Education schools={[
          { degree: "BSc Computer Science", school: "University of Colorado", years: "2011-2015" }
        ]} />
        <Skills skills={["React Native", "JavaScript", "Python", "Cloud Computing", "Machine Learning"]} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
