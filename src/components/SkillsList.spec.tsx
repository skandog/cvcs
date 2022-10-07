import {render, screen} from '@testing-library/react';
import SkillsList from './SkillsList';
import {Skill} from '../lib/skills';

describe('SkillsList', () => {
  const skills: Skill[] = [
    {id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'},
    {id: 2, name: 'Typescript', count: 3, type: 'dev'},
  ];
  let loadSkills: any;

  function renderComponent() {
    loadSkills = jest.fn().mockName('loadSkills');

    render(<SkillsList loadSkills={loadSkills} skills={skills} />);
  }

  it('loads skills on first render', () => {
    renderComponent();
    expect(loadSkills).toHaveBeenCalled();
  });

  it('displays the skills', () => {
    renderComponent();

    expect(screen.getByText('Trail Blazer')).toBeInTheDocument();
    expect(screen.getByText('Typescript')).toBeInTheDocument();
  });
});
