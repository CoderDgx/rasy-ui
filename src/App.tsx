import React from 'react';
// import Button, {ButtonType, ButtonSize} from './components/Button/button'
import Alert from './components/Alert/alert';
// import Menu from './components/Menu/menu';
// import MenuItem from './components/Menu/menuItem';
// import SubMenu from './components/Menu/subMenu';
// import Tabs from './components/Tabs/tabs';
// import TabItem from './components/Tabs/tabItem';
// import Icon from './components/Icon/icon';
function App() {
  return (
    <div
      style={{
        padding: "20px 40px",
        width: "500px",
      }}
    >
      <h3>组件演示</h3>
      <React.Fragment key=".1">
        <Alert closable title="this is Success" type="success" />
        <Alert closable title="this is Danger!" type="danger" />
        <Alert closable={false} title="this is Warning!" type="warning" />
        <Alert
          closable
          message="this is a long description"
          onClose={function noRefCheck() {}}
          title="提示标题欧亲"
          type="default"
        />
      </React.Fragment>
    </div>
  );
}

export default App;
