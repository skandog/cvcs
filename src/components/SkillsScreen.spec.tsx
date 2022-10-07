import {render, screen} from '@testing-library/react';
import {ReactElement} from 'react';
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

    const customRender = (
      ui: ReactElement,
      {providerProps, ...renderOptions},
    ) => {
      return render(
        <skillsContext.Provider value={providerProps}>
          {ui}
        </skillsContext.Provider>,
        renderOptions,
      );
    };

    it('skillsContext provides skill values to component', () => {
      //     value: [{id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'}],
      //   };

      //   customRender(<SkillsScreen />, {providerProps});

      render(<App />);
      expect(screen.getByText('Trail Blazer')).toBeInTheDocument();
    });

    const skills = [
      {id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'},
    ];
    beforeEach(() => {
      render(
        <skillsContext.Provider value={skills}>
          <SkillsScreen />
        </skillsContext.Provider>,
      );
    });
    it('testing contwext in jest', () => {
      expect(screen.getByText('Trail Blazer')).toBeInTheDocument();
    });
  });
});
