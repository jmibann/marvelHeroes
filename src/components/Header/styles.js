import styled from 'styled-components';

import { backgroundColor } from '../../Common/theme';

export const HeaderContainer = styled.div`
display: flex;
justify-content: flex-start;
align-item: center;
border-bottom-style: solid;
border-color: #A8A8A8;
border-width: 2px;
background-color: ${ () => backgroundColor};
`