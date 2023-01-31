import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

// React app tests using Jest

// Sample test 0 - passed
test('test', () => {
  expect(true).toBe(true);
})

// Sample test 1 - passed
test('test1', () => {
  render(<App/>)
  const testElement = screen.getByTestId('test-1');
  expect(testElement).toBeInTheDocument();
  expect(testElement).toHaveTextContent('Welcome');
})
