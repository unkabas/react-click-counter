import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const StyledButton = styled.button`
  background-color: ${props => props.bgColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

function MyButton({ onClick, bgColor, hoverColor }) {
  return (
    <StyledButton onClick={onClick} bgColor={bgColor} hoverColor={hoverColor}>
      Click me
    </StyledButton>
  );
}

function App() {
  const [clickCount, setClickCount] = useState(0);
  const colors = ['#61dafb', '#21a1f1', '#f39c12', '#e74c3c', '#8e44ad'];
  
  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  const currentColor = colors[clickCount % colors.length];
  const nextColor = colors[(clickCount + 1) % colors.length];

  return (
    <div className="App">
      <header className="App-header">
        <MyButton onClick={handleClick} bgColor={currentColor} hoverColor={nextColor} />
        <p>Click count: {clickCount}</p>
      </header>
    </div>
  );
}

export default App;
