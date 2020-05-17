
import styled from 'styled-components';

export const SearchBar = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
width: 100%;
height: 50px;
background-color: white
`;

export const Separator = styled.div`
height: 35px;
width: 2px;
background-color: #A8A8A8
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: white;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  placeholderTextColor = 'red';
  width: 100%;
`;

export const MagnifierContainer = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;
