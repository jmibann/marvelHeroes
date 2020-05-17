import styled from 'styled-components';


export const CardComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: rgb(247, 248, 250);
    `;

export const ImageFrame = styled.div`
    position: relative;
`;

export const HeroImage = styled.img`
    width: 256px;
    border-radius: 10px;
    `;

export const Name = styled.p`
    position: absolute;
    font-size: 16px;
    color: white;
    font-weight: bold;
    left: 5px;
    bottom: 5px;
    margin: 0;
`

export const Star = styled.p`
    position: absolute;
    font-size: 20px;
    color: white;
    font-weight: bold;
    right: 5px;
    top: 5px;
    margin: 0;
`