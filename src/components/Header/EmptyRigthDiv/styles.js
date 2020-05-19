import styled from 'styled-components';

import { backgroundColor, textColor } from '../../../Common/theme';

export const EmptyDiv = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  height: 25px;
  background-color: rgb(255, 23, 37);
  border-color: rgb(255, 23, 37);
  color:${ () => textColor};
  font-weight: bold;
`