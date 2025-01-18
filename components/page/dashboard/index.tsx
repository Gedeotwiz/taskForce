"use client";  
import React, { useState } from 'react';  
import {  
  MenuFoldOutlined,  
  MenuUnfoldOutlined,  
  UploadOutlined,  
  UserOutlined,
  UpOutlined,  
  VideoCameraOutlined  
} from '@ant-design/icons';  
import { Button, Layout, Menu, theme } from 'antd';  
import Income from './Income';  
import Expenses from './expenses';
import GContainer from '@/components/share/container';
import ProfileDropdown from '@/components/share/dropdown';
   

const { Header, Sider, Content } = Layout;  

const DashboardSection: React.FC = () => {  
  const [collapsed, setCollapsed] = useState(false);  
  const [selectedKey, setSelectedKey] = useState('1-1');  

  const {  
    token: { colorBgContainer, borderRadiusLG }  
  } = theme.useToken();  

  const handleMenuClick = (e: { key: string }) => {  
    setSelectedKey(e.key);  
  };  

  const renderContent = () => {  
    const keyParts = selectedKey.split('-');  
    const mainKey = keyParts[0];  
    const subKey = keyParts[1];  

    if (mainKey === '1') {  
      if (subKey === '1') {  
        return <Income />;  
      } else if (subKey === '2') {  
        return <Expenses />;  
      }  
    } else if (mainKey === '2') {   
      return <div>Budget Component</div>;  
    } else if (mainKey === '3') {    
      return <div>Reports Component</div>;  
    }  
    return null;  
  };  

  return (  
    <Layout>  
      <Sider trigger={null} collapsible collapsed={collapsed} className='h-[100vh] bg-white pt-20'>  
        <div className="demo-logo-vertical" />  
        <Menu  
          theme="light"  
          mode="inline"  
          selectedKeys={[selectedKey]}  
          onClick={handleMenuClick}  
        >   
          <Menu.SubMenu key="1" title="Transactions" icon={<UserOutlined />}>  
            <Menu.Item key="1-1">Income</Menu.Item>  
            <Menu.Item key="1-2">Expenses</Menu.Item>  
          </Menu.SubMenu>  
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>  
            Budget  
          </Menu.Item>  
          <Menu.Item key="3" icon={<UploadOutlined />}>  
            Reports  
          </Menu.Item>  
        </Menu>  
      </Sider>  
      <Layout>  
        <Header style={{ background: colorBgContainer }} className='flex justify-between items-center pr-10 pl-0'>  
          <Button  
            type="text"  
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}  
            onClick={() => setCollapsed(!collapsed)}  
            style={{  
              fontSize: '16px',  
              width: 64,  
              height: 64,  
            }}  
          />  
          <GContainer>
            <ProfileDropdown/>
          </GContainer>
        </Header>  
        <Content  
          style={{  
            margin: '24px 16px',  
            padding: 24,  
            minHeight: 280,  
            background: colorBgContainer,  
            borderRadius: borderRadiusLG,  
          }}  
        >  
          {renderContent()}  
        </Content>  
      </Layout>  
    </Layout>  
  );  
};  

export default DashboardSection;