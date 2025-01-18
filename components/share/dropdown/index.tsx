import React, { useState } from "react";  
import { UpOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";  
import { Avatar, Dropdown, Menu } from "antd";  

const ProfileDropdown: React.FC = () => {  
  const [visible, setVisible] = useState(false);  

  const menu = (  
    <Menu>  
      <Menu.Item key="profile">  
        <a href="/my-profile">My Profile</a>  
      </Menu.Item>  
      <Menu.Item key="names">  
        <a href="/">Names</a>  
      </Menu.Item>  
      <Menu.Item key="">  
        <a href="/">Logout</a>  
      </Menu.Item>  
    </Menu>  
  );  

  const handleVisibleChange = (flag: boolean) => {  
    setVisible(flag);  
  };  

  return (  
    <Dropdown overlay={menu} trigger={["click"]} onVisibleChange={handleVisibleChange} visible={visible}>  
      <a onClick={(e) => e.preventDefault()} style={{ display: "flex", alignItems: "center" }}>  
        <Avatar icon={<UserOutlined />} />  
        <span style={{ marginLeft: 8 }}>Twizerimana</span>  
        {visible ? < UpOutlined style={{ marginLeft: 4 }} /> : <DownOutlined style={{ marginLeft: 4 }} />}  
      </a>  
    </Dropdown>  
  );  
};  

export default ProfileDropdown;