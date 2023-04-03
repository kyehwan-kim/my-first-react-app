import React from 'react';
import './App.css';
import FancyBorder from './components/FancyBorder';

function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Hello, Props.children</h1>
        <p>이건 매우 유용한 기술입니다아!</p>
      </FancyBorder>
    </div>
  );
}

export default App;
