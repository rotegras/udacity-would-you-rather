import React from 'react';
import { render, fireEvent, cleanUp } from '@testing-library/react';
import Button from './';
import Theme from '../../theme/Theme';
import '@testing-library/react/dont-cleanup-after-each';



describe('<Button />', () => {
  it('renders without crashing', () => {
    render(
      <Theme>
        <Button name='button' />
      </Theme>
    );
  });
  it('shows name correctly', () => {
    const { getByText } = render(
      <Theme>
        <Button name='button name' />
      </Theme>
    );
    getByText(/button name/i);
  });
  it('is clicked', () => {
    let clicked = false;
    const { getByText } = render(<Theme>
      <Button
        name='buttonname'
        onClick={() => clicked = true}
      />
    </Theme>);
    const button = getByText(/buttonname/i);
    fireEvent.click(button);
    expect(clicked).toBe(true);
  });
});