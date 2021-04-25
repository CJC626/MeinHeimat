import { render } from '@testing-library/react';
import React from 'react';
import App from './App';


test('<App />', () => {
  const {appFragment} = render(<App />);
  expect(appFragment).toMatchSnapshot();
});
