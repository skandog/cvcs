import {render, screen} from '@testing-library/react';
import {ReactElement} from 'react';
import {skillsContext} from '../contexts/contexts';
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
      const providerProps = {
        value: [{id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'}],
      };

      //     value: [{id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'}],
      //   };

      //   customRender(<SkillsScreen />, {providerProps});

      render(
        <>
          <skillsContext.Provider {...providerProps}>
            <SkillsScreen />
          </skillsContext.Provider>
          ,
        </>,
      );
      expect(screen.getByText('Trail Blazer')).toBeInTheDocument();
    });
  });
});
