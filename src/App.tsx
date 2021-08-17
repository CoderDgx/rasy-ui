import React from 'react';
import Button from './components/Button/button'
import Alert from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';
import Icon from './components/Icon/icon';
import Input from './components/Input/input';
import AutoComplete, { DataSourceType } from './components/AutoComplete/autoComplete';
import Select from './components/Select/select';
import Option from './components/Select/option'
import Upload from './components/Upload/upload'
function App() {
  return (
    <div
      style={{
        padding: "20px 40px",
        width: "500px",
      }}
    >
      <h3>组件演示</h3>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        drag
        multiple
        name="fileName"
        onChange={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>点击或者拖动到此区域进行上传</p>
      </Upload>
    </div>
  );
}

export default App;
