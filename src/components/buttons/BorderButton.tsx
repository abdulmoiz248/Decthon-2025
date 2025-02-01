import React from 'react';
import styled from 'styled-components';

const Button: React.FC = () => {
  return (
    <ButtonContainer>
      <button>Hover me</button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  button {
    width: 160px;
    height: 56px;
    border: 3px solid #149cea;
    background: transparent;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    position: relative;
    transition: 1s;
  }

  button::before,
  button::after {
    content: "";
    position: absolute;
    left: 3%;
    width: 94%;
    height: 40%;
    background-color: #212121;
    transition: 0.5s;
    transform-origin: center;
    border-radius: 5px;
  }

  button::before {
    top: -10px;
  }

  button::after {
    top: 80%;
  }

  button:hover::before,
  button:hover::after {
    transform: scale(0);
  }

  button:hover {
    box-shadow: inset 0 0 25px #1479ea;
  }
`;

export default Button;
