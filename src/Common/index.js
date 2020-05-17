import styled from 'styled-components';

const getWidthString = (span) => {
  if (!span) return;

  let width = 100 * (span / 12);

  return `width: ${width}%`;
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap ;
`;

export const Column = styled.div`

  background: ${props => props.backGround ? props.backGround : 'white'};

  ${({ xs }) => (xs ? getWidthString(xs) : "width:100%")};

  @media only screen and (min-width: 768px){
    ${({ sm }) => (sm && getWidthString(sm))};

  @media only screen and (min-width: 992px){
    ${({ md }) => (md && getWidthString(md))};
  
  @media only screen and (min-width: 1200px){
    ${({ lg }) => (lg && getWidthString(lg))};
`;