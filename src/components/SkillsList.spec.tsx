import {render} from '@testing-library/react';
import SkillsList from './SkillsList';

describe('SKillsList', () => {
  it('loads skills on first render', () => {
    const loadSkills = jest.fn().mockName('loadSkills');

    render(<SkillsList loadSkills={loadSkills} />);

    expect(loadSkills).toHaveBeenCalled();
  });
});
