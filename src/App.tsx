import React from 'react';
// import Button, {ButtonType, ButtonSize} from './components/Button/button'
// import Alert from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
  return (
    <div className="App">
      <div
        style={{
          padding: "20px 40px",
          width: "500px",
        }}
      >
        <h3>组件演示</h3>
        <Menu
          defaultIndex="0"
          mode="vertical"
          onSelect={(index) => {alert(index)}}
          defaultOpenSubMenus={['3']}
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link 2</MenuItem>
          <MenuItem disabled>disabled</MenuItem>
          <SubMenu title="下拉选项">
            <MenuItem>下拉选项一</MenuItem>
            <MenuItem>下拉选项二</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default App;
