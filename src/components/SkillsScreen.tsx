import {useContext} from 'react';
import {skillsContext} from '../contexts/contexts';
import SkillsList from './SkillsList';
import Card from './Card';
import {Heading} from '@chakra-ui/react';

export default function SkillsScreen() {
  const {skills} = useContext(skillsContext);

  return (
    <div>
      <Card>
        <Heading>Skills</Heading>
        <SkillsList loadSkills={() => {}} skills={skills} />
      </Card>
    </div>
  );
}
