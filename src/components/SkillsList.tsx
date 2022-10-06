import {useEffect} from 'react';

export interface Skill {
  id: number;
  name: string;
  count: number;
  type?: string;
}

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
    <div>
      <ul>
        {skills?.map(skill => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
