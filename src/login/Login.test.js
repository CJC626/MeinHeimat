import LoginForm from './LoginForm';
import Login from './Login';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

test('<LoginForm/>', () =>{
    const onSubmit = jest.fn().mockImplementation(e => e.preventDefault());
    const {getByText, queryByTestId} = render(<LoginForm submitForm={onSubmit}/>)
  
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