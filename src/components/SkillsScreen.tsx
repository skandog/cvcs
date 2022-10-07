import {useContext} from 'react';
import {skillsContext} from '../contexts/contexts';
import SkillsList from './SkillsList';

export default function SkillsScreen() {
  const {skills, setSkills} = useContext(skillsContext);

  return (
    <div>
      <h1>skills</h1>
      <SkillsList loadSkills={() => {}} skills={skills} />
    </div>
  );
}
