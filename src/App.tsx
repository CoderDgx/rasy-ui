import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
// import Alert from './components/Alert/alert';
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
        <Button btnType="default" disabled={false} size="lg">
          large button
        </Button>
        <Button btnType="default" disabled={false} size="sm">
          small button
        </Button>
      </React.Fragment>
    </div>
  );
}

export default App;
