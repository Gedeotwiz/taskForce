"use client"
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import type { FormProps } from 'antd';
import GContainer from './container';
import Link from 'next/link';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const onFinish: FormProps['onFinish'] = (values) => {
  console.log('Success:', values);
};

const LoginForm: React.FC = () => {
  
  const [passwordVisible, setPasswordVisible] = useState(false);

  
  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Form onFinish={onFinish}>
      <GContainer className="pt-10 pb-5">
        <label htmlFor="email">Email</label>
        <Input id="email" type="text" placeholder="Email" />
      </GContainer>

      <GContainer className="pb-5">
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

      <GContainer className="pb-5 flex justify-between items-center">
        <Checkbox>Remember me</Checkbox>
        <Link href="" className="text-blue-400">
          Forgot Password
        </Link>
      </GContainer>

      <GContainer>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </GContainer>
    </Form>
  );
};

export default LoginForm;
