import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from './App/Store'; // 👈 adjust this path based on your project
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
