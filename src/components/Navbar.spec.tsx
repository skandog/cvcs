import {render} from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('loads on page render', () => {
    render(<Navbar />);
  });

  it('displays title', () => {
    const Title = 'CV Cheat Sheet';
    render(<Navbar />);

    expect(Title).toBeInTheDocument();
  });
});
