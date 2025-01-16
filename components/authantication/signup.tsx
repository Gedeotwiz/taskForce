
import { Button, Card } from 'antd';
import { JSX } from 'react';
import GContainer from './share/container';
import {LoginOutlined} from "@ant-design/icons"
import SignupForm from './share/signupForm';

/**
 * @since Jan 2025
 * @author Twizerimana Gedeon <gedeontwizerimana6@gmail.com>
 * @see {@link https://www.linkedin.com/in/twizerimana-gedeon-086791296/} - Author's website
 */

interface IProps{
    onClick: ()=>void
}

const Signup = ({onClick}:IProps): JSX.Element => {
    return (
      <GContainer className='flex flex-col gap-5 justify-center items-center h-screen bg-gray-300'>
            
            <Card style={{ width: 800 ,height:400}}>
               <h1 className='text-2xl font-bold'>Register Your Account</h1>
               <SignupForm/>
             </Card>
        <Card style={{ width: 800 }}>
            <GContainer className='flex justify-between items-center w-full'>
                <p>Already have account go to login</p>
                <Button onClick={onClick}> <LoginOutlined />Login</Button>
            </GContainer>
        </Card>
        
      </GContainer>
    );
  };
export default Signup