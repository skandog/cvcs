import React, {useState} from 'react';
import SkillsScreen from './components/SkillsScreen';
import {skillsContext} from './contexts/contexts';
import {dummySkillList} from './lib/skills';

function App() {
  const [skills, setSkills] = useState(dummySkillList);

  return (
    <skillsContext.Provider value={{skills}}>
      <div className="App">
        <SkillsScreen />
      </div>
    </skillsContext.Provider>
  );
}

export default App;
