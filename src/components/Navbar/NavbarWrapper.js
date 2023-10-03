import React, {useContext, Children, cloneElement} from 'react'
import classNames from 'classnames';

import { ThemeContext } from '../../contexts';

function NavbarWrapper({ isOpen, setIsOpen, className, variant='primary', children }) {
  const theme = useContext(ThemeContext)

  let defaultClasses = {
    'primary': `${theme.primary.bg} text-white shadow`,
    'secondary': `${theme.secondary.bg} text-white shadow`
  }

  const updatedClasses = classNames(defaultClasses[variant], className);

  return (
    <div className={updatedClasses}>
      {
        Children.map(children, (child) => {
          return cloneElement(child, {isOpen, setIsOpen})
        })
      }
    </div>
  )
}

export default NavbarWrapper