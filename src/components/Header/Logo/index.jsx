import React from 'react';

import marvelLogo from './Marvel.png';
import { LogoContainer } from './styles';

const Logo = () => {

    return (
        <LogoContainer>
            <img src={marvelLogo} alt="Smiley face" height="50" width="100" />
        </LogoContainer>
    )
}

export default Logo;