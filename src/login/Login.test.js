import LoginForm from './LoginForm';
import Login from './Login';
import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { fireEvent, render, waitFor } from '@testing-library/react';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('<LoginForm/>', () =>{
    const onSubmit = jest.fn().mockImplementation(e => e.preventDefault());
    const formErrorCls = jest.fn();
    const errorText = jest.fn();
    const {getByText, queryByTestId} = render(
    <LoginForm 
      formErrorCls={formErrorCls}
      errorText={errorText}
      submitForm={onSubmit}/>
    );
  
    expect(queryByTestId).toMatchSnapshot();
    expect(queryByTestId('login-form')).toBeTruthy();
    expect(queryByTestId('login-form').tagName).toBe('FORM');
    expect(getByText('Sign in').tagName).toBe('BUTTON');
    fireEvent.click(getByText('Sign in'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  
  });

test('<Login />', () => {
    const username_text = 'chris@test.ccatchings.com';
    const setToken = jest.fn();
    const {queryByTestId} = render(<Login setToken={setToken}/>);
    fireEvent.change(queryByTestId('username'), {target: {value: username_text}});
    expect(queryByTestId('username')).toMatchSnapshot();
    expect(queryByTestId('username')).toHaveValue(username_text);
});

test('Failed login', async () => {
  const setToken = jest.fn();
  fetch.mockResponseOnce(JSON.stringify({
    error: 'Invalid username/password.'
  }));
  const {getByText, queryByTestId} = render(
    <Login setToken={setToken}/>
  ); 
  fireEvent.change(queryByTestId('username'), {target: {value: 'a@a.com'}});
  fireEvent.change(queryByTestId('password'), {target: {value: '123'}});

  fireEvent.click(getByText("Sign in"));
  await waitFor(() => {
    expect(queryByTestId('errorDisplay').classList.contains('form-error-display')).toBe(true);
  });
});