import React from 'react';
import { HeaderContainer } from './styles';

import Logo from './Logo';
import SearchBarContainer from './SearchBar';
import EmptyRigthDiv from './EmptyRigthDiv'

const Header = ({ currentTheme, setCurrentTheme }) => {

  return (
    <HeaderContainer>
      <Logo />
      <SearchBarContainer />
      <EmptyRigthDiv currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
    </HeaderContainer>
  )
}

export default Header;