import React, { useContext } from 'react';

import marvelLogo from './Marvel.png';
import { LogoContainer } from './styles';

import { InputContext } from '../../../context';

const Logo = () => {

  const { setInput } = useContext(InputContext);

  return (
    <LogoContainer onClick={() => setInput('')}>
      <img src={marvelLogo} alt="Smiley face" height="50" width="100" />
    </LogoContainer>
  )
}

export default Logo;