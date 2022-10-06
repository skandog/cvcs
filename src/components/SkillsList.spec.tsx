import {render, screen} from '@testing-library/react';
import SkillsList from './SkillsList';
import {Skill} from './SkillsList';

describe('SkillsList', () => {
  it('loads skills on first render', () => {
    const loadSkills = jest.fn().mockName('loadSkills');
    const skills: [] = [];
    render(<SkillsList loadSkills={loadSkills} skills={skills} />);

    expect(loadSkills).toHaveBeenCalled();
  });

  it('displays the skills', () => {
    const noop = () => {};
    const skills: Skill[] = [
      {id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'},
      {id: 2, name: 'Typescript', count: 3, type: 'dev'},
    ];

    render(<SkillsList loadSkills={noop} skills={skills} />);

    expect(screen.getByText('Trail Blazer')).toBeInTheDocument();
    expect(screen.getByText('Typescript')).toBeInTheDocument();
  });
});
