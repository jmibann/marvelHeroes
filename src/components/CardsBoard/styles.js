import styled from 'styled-components';

import { backgroundColor, textColor } from '../../App';

export const CardsContainer = styled.div`
    padding: 58px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${ () => backgroundColor};
`;
// background-color: rgb(247, 248, 250);

export const NoComicFound = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;