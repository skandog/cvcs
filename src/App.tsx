import React, {useEffect, useState} from 'react';
import SkillsScreen from './components/SkillsScreen';
import {skillsContext} from './contexts/contexts';
import {dummySkillList} from './lib/skills';
import {Skill} from './lib/skills';
import Layout from './components/Layouts/Main';

function App() {
  const [skills, setSkills] = useState<Skill[] | null>(dummySkillList);

  useEffect(() => {
    const fetchSkills = async () => {
      let response = await fetch('https://cvcs.herokuapp.com/skills');
      let data = await response.json();
      setSkills([...data]);
    };
    fetchSkills();
  }, []);

  return (
    <skillsContext.Provider value={{skills}}>
      <div className="App">
        <Layout>
          <SkillsScreen />
        </Layout>
      </div>
    </skillsContext.Provider>
  );
}

export default App;
