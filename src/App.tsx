import React, {useEffect, useState} from 'react';
import SkillsScreen from './components/SkillsScreen';
import {skillsContext} from './contexts/contexts';
import {dummySkillList} from './lib/skills';

function App() {
  const [skills, setSkills] = useState(dummySkillList);

  useEffect(() => {
    const fetchSkills = async () => {
      let response = await fetch('http://localhost:3001/skills');
      let data = await response.json();
      setSkills([...data]);
    };
    fetchSkills();
  }, []);
  console.log(skills);
  return (
    <skillsContext.Provider value={{skills}}>
      <div className="App">
        <SkillsScreen />
      </div>
    </skillsContext.Provider>
  );
}

export default App;
