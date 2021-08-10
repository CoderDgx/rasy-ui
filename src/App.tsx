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
import AutoComplete, { DataSourceType } from './components/AutoComplete/autoComplete';

interface GithubUserProps {
  value: string;
  url: string;
}
function App() {
  const handleFetch = (query: string) => {
    return fetch("https://api.github.com/search/users?q=" + query)
      .then((res) => res.json())
      .then(({ items }) => {
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  };

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>;
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <span>url: {itemWithGithub.url}</span>
      </>
    );
  };
  return (
    <div>
      <AutoComplete
        fetchSuggestions={handleFetch}
        placeholder="输入 Github 用户名试试"
        renderOption={renderOption}
      />
    </div>
  );
}

export default App;
