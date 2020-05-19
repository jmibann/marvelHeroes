import React, { useState } from 'react';
import { EmptyDiv, Button } from './styles';


const EmptyRightDiv = (props) => {
  const [currentTheme, setCurrentTheme] = useState('light')

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