import React from 'react';
// import Button from './components/Button/button'
// import Alert from './components/Alert/alert';
// import Menu from './components/Menu/menu';
// import MenuItem from './components/Menu/menuItem';
// import SubMenu from './components/Menu/subMenu';
// import Tabs from './components/Tabs/tabs';
// import TabItem from './components/Tabs/tabItem';
// import Icon from './components/Icon/icon';
// import Input from './components/Input/input';
// import AutoComplete, { DataSourceType } from './components/AutoComplete/autoComplete';
import Select from './components/Select/select';
import Option from './components/Select/option'
function App() {
  return (
    <div
      style={{
        padding: "20px 40px",
        width: "500px",
      }}
    >
      <h3>组件演示</h3>
      <Select
        name="viking-select"
        onChange={function noRefCheck() {}}
        onVisibleChange={function noRefCheck() {}}
        placeholder="请选择"
      >
        <Option value="nihao" label="你好"/>
        <Option value="nihao2" />
        <Option value="nihao3" />
        <Option disabled value="disabled" />
        <Option value="nihao5" />
      </Select>
    </div>
  );
}

export default App;
