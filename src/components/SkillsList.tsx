import {useEffect} from 'react';
import {Skill} from '../lib/skills';

export interface Props {
  loadSkills: () => void;
  skills?: Skill[];
  [key: string]: any;
}

const SkillsList = ({loadSkills, skills}: Props) => {
  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  return (
    <div className="skills-list">
      <ul>
        {skills?.map(skill => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
