import {useEffect} from 'react';

export interface Skill {
  name: string;
  count: number;
  type?: string;
}

const SkillsList = ({loadSkills}: {loadSkills: () => void}) => {
  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  return (
    <div>
      <h2>skills list</h2>
    </div>
  );
};

export default SkillsList;
