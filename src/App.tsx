import React from 'react';
// import Button, {ButtonType, ButtonSize} from './components/Button/button'
// import Alert from './components/Alert/alert';
// import Menu from './components/Menu/menu';
// import MenuItem from './components/Menu/menuItem';
// import SubMenu from './components/Menu/subMenu';
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';
import {PlayCircleOutlined} from '@ant-design/icons'

function App() {
  return (
    <div
      style={{
        padding: "20px 40px",
        width: "500px",
      }}
    >
      <h3>组件演示</h3>
      <Tabs defaultIndex={0} onSelect={function noRefCheck() {}} type="card">
        <TabItem
          label={
            <>
              <PlayCircleOutlined />
              自定义图标
            </>
          }
        >
          this is card one
        </TabItem>
        <TabItem label="tab2">this is content two</TabItem>
      </Tabs>
    </div>
  );
}

export default App;
