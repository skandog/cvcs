import {render, screen} from '@testing-library/react';
import SkillsScreen from './SkillsScreen';

describe('<SkillsList />', () => {
  function renderComponent() {
    render(<SkillsScreen />);
  }

  describe('when page is initialized', () => {
    it('shows default value of undefined', () => {
      renderComponent();
      expect(screen.queryByText('Trail Blazer')).not.toBeInTheDocument();
    });
  });
});
