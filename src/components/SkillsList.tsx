import {useEffect} from 'react';

const SkillsList = ({loadSkills}) => {
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
