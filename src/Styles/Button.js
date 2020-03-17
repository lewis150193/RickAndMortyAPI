import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.primary ? 'firebrick' : 'blue' };
  border: solid darkgray thin;
  padding: 4px;
  justify-content: center;
  text-align: center;
  height: 40px;
  margin: 80px 40px 40px 40px;
  display: flex;
  color: darkblue;
  position: relative;
  top: 50px;
  left: 40px;
  cursor: pointer;
  
  :hover{
  background-color: yellow;
  }

`;

export const Input = styled.input`
  background-color: ${props => props.primary ? 'firebrick' : 'lightgreen' };
  border: solid darkgray thin;
  padding: 4px;
  color: darkblue;
  flex: auto;
  align-content: center;
`;


export const Div = styled.div`
  background-color: #282c34;
  color: black;
 


`;
