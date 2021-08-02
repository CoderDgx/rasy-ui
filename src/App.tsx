import React from 'react';
// import Button, {ButtonType, ButtonSize} from './components/Button/button'
// import Alert from './components/Alert/alert';
// import Menu from './components/Menu/menu';
// import MenuItem from './components/Menu/menuItem';
// import SubMenu from './components/Menu/subMenu';
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';

function App() {
  return (
    <div
      style={{
        padding: "20px 40px",
        width: "500px",
      }}
    >
      <h3>组件演示</h3>
      <Tabs defaultIndex={0} type="line" onSelect={function noRefCheck() {}}>
        <TabItem label="选项卡一">this is content one</TabItem>
        <TabItem label="选项卡二">this is content two</TabItem>
        <TabItem label="用户管理">this is content three</TabItem>
      </Tabs>
    </div>
  );
}

export default App;
