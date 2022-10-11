import {useContext} from 'react';
import {skillsContext} from '../contexts/contexts';
import SkillsList from './SkillsList';
import {Heading} from '@chakra-ui/react';

export default function SkillsScreen() {
  const {skills} = useContext(skillsContext);

  return (
    <div>
      <Heading pb={5}>Skills</Heading>
      <SkillsList loadSkills={() => {}} skills={skills} />
    </div>
  );
}
