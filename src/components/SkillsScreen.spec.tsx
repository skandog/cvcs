import {render, screen} from '@testing-library/react';
import {skillsContext} from '../contexts/contexts';
import SkillsScreen from './SkillsScreen';
import App from '../App';

describe('<SkillsList />', () => {
  function renderComponent() {
    render(<SkillsScreen />);
  }

  describe('when page is initialized', () => {
    it('shows default value of undefined', () => {
      renderComponent();
      expect(screen.queryByText('Trail Blazer')).not.toBeInTheDocument();
    });

    it('skillsContext provides skill values to component', () => {
      render(<App />);
      expect(screen.getByText('Trail Blazer')).toBeInTheDocument();
    });

    const skills = [
      {id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'},
    ];

    it('renders skills when context is explicitly called in jest', () => {
      render(
        <skillsContext.Provider value={{skills}}>
          <SkillsScreen />
        </skillsContext.Provider>,
      );
      expect(screen.getByText('Trail Blazer')).toBeInTheDocument();
    });
  });
});
