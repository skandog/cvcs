import {render, screen} from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('loads on page render', () => {
    render(<Navbar />);
  });

  it('displays title', () => {
    const Title = 'CV Cheat Sheet';
    render(<Navbar />);
    let navi = screen.getByRole('navigation');
    expect(navi).toHaveTextContent(Title);
  });

  it('displays page links', () => {
    const skills = 'skills';
    const stories = 'stories';

    render(<Navbar />);
    let navi = screen.getByRole('navigation');
    expect(navi).toHaveTextContent(skills);
    expect(navi).toHaveTextContent(stories);
  });
});
