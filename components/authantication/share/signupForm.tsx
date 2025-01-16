"use client"
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import type { FormProps } from 'antd';
import GContainer from './container';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const onFinish: FormProps['onFinish'] = (values) => {
  console.log('Success:', values);
};

const SignupForm: React.FC = () => {
  
  const [passwordVisible, setPasswordVisible] = useState(false);

  
  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Form onFinish={onFinish}>
        <GContainer className='flex gap-2'>
        <GContainer className="pt-10 pb-5 w-1/2">
        <label htmlFor="email">Names</label>
        <Input id="email" type="text" placeholder="Email" />
      </GContainer>

      <GContainer className="pt-10 pb-5 w-1/2">
        <label htmlFor="email">Email</label>
        <Input id="email" type="text" placeholder="Email" />
      </GContainer>
        </GContainer>

        <GContainer className='flex gap-2'>
        <GContainer className="pb-5 w-1/2">
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          type={passwordVisible ? 'text' : 'password'} 
          placeholder="Password"
          suffix={
            passwordVisible ? (
              <EyeInvisibleOutlined onClick={handlePasswordVisibilityToggle} />
            ) : (
              <EyeOutlined onClick={handlePasswordVisibilityToggle} />
            )
          }
        />
      </GContainer>
      <GContainer className="pb-5 w-1/2">
        <label htmlFor="password">Confrim Password</label>
        <Input
          id="password"
          type={passwordVisible ? 'text' : 'password'} 
          placeholder="Password"
          suffix={
            passwordVisible ? (
              <EyeInvisibleOutlined onClick={handlePasswordVisibilityToggle} />
            ) : (
              <EyeOutlined onClick={handlePasswordVisibilityToggle} />
            )
          }
        />
      </GContainer>
        </GContainer>
      
      <GContainer className="pb-5 flex justify-between items-center">
        <Checkbox>I agree to the Terms and Condition</Checkbox>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </GContainer>
    </Form>
  );
};

export default SignupForm;
