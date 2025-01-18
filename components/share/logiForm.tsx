"use client"
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import type { FormProps } from 'antd';
import GContainer from './container';
import Link from 'next/link';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';



const LoginForm: React.FC = () => {
  const router = useRouter();
  const onFinish: FormProps['onFinish'] = (values) => {
    console.log('Success:', values);
    router.push("/dashboard");
  };
  
  const [passwordVisible, setPasswordVisible] = useState(false);

  
  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Form >
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
        <Button type="primary" htmlType="submit" onClick={onFinish}>
          <Link href="">Submit</Link>
        </Button>
      </GContainer>
    </Form>
  );
};

export default LoginForm;
