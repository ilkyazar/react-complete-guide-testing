import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World as a text', () => {
  // Arrange - set up test data, conditions and environment
  render(<Greeting />);

  // Act - run the logic that should be tested

  // Assert - compare execution result with expected result

  // get -> returns an error if element not found
  // query -> won't return an error
  // find -> returns a promise
  const helloWorldElement = screen.getByText('Hello World!');
  expect(helloWorldElement).toBeInTheDocument();
});
