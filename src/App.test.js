import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from './App/Store'; 
import App from './App';

test('renders Increment button', () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const buttonElement = screen.getByRole('button', { name: /increment/i });
  expect(buttonElement).toBeInTheDocument();
});
