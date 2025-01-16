import { Button, Card } from 'antd';
import { JSX } from 'react';
import GContainer from './share/container';
import { AreaChartOutlined, LoginOutlined } from '@ant-design/icons';
import LoginForm from './share/logiForm';

/**
 * @since Jan 2025
 * @author Twizerimana
 * @see {@link https://www.linkedin.com/in/twizerimana-gedeon-086791296/} - Author's website
 */

interface IProps {
  onClick: () => void;
}

const Login = ({ onClick }: IProps): JSX.Element => {
  return (
    <GContainer className="flex flex-col gap-5 justify-center items-center h-screen bg-gray-300">
      <GContainer className="flex justify-center items-center">
        <Card style={{ width: 400, height: 400 }} className="bg-gray-200 rounded-r-none">
          <GContainer className="flex flex-col justify-between h-[350px]">
            <GContainer className="rounded-md border-2 border-gray-600 w-12 flex justify-center items-center">
              <AreaChartOutlined className="text-3xl" />
            </GContainer>
            <GContainer>
              <h1 className="text-2xl font-bold">Task Force</h1>
              <p className="text-lg">Correction challenge</p>
            </GContainer>
            <span>@gedeon.mail</span>
          </GContainer>
        </Card>
        <Card style={{ width: 400, height: 400 }} className="rounded-l-none">
          <h1 className="text-2xl font-bold">Login</h1>
          <LoginForm />
        </Card>
      </GContainer>
      <Card style={{ width: 800 }}>
        <GContainer className="flex justify-between items-center w-full">
          <p>If you don&apos;t have an account go to register</p>
          <Button onClick={onClick}>
            <LoginOutlined />
            Register
          </Button>
        </GContainer>
      </Card>
    </GContainer>
  );
};

export default Login;
