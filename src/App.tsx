import React from 'react';
// import Button, {ButtonType, ButtonSize} from './components/Button/button'
import Alert from './components/Alert/alert';

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
        <React.Fragment key=".1">
          <Alert closable title="this is Success" type="success" />
          <Alert closable title="this is Danger!" type="danger" />
          <Alert closable={false} title="this is Warning!" type="warning" />
          <Alert closable title="this is message!" message="message" />
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
