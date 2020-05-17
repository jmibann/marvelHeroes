import React from 'react';
import { HeaderContainer } from './styles';

import Logo from './Logo';
import SearchBarContainer from './SearchBar';
import EmptyRigthDiv from './EmptyRigthDiv'

const Header = ({ history }) => {

  return (
    <HeaderContainer>
      <Logo />
      <SearchBarContainer />
      <EmptyRigthDiv />
    </HeaderContainer>
  )
}

export default Header;