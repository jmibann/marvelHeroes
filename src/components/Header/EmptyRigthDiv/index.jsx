import React, { useState } from 'react';
import { EmptyDiv, Button } from './styles';


const EmptyRightDiv = ({ currentTheme, setCurrentTheme }) => {

  const toogleTheme = () => {
    (currentTheme === 'light') ? setCurrentTheme('dark') : setCurrentTheme('light')
  }

  const switchTo = () => {
    return currentTheme === 'light' ? 'Dark Mode' : 'Light Mode';
  }

  return (
    <div>
      <EmptyDiv>
        <Button onClick={toogleTheme}>{switchTo()}</Button>
      </EmptyDiv>
    </div>
  )
}

export default EmptyRightDiv;