import React from 'react'
import burgerLogo from '../../assets/images/monster-burger.svg'
import classes from './Logo.module.css'

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt={'burger-logo'}/>
  </div>
)

export default Logo