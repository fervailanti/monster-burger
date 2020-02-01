import React from 'react'
import classes from './Logo.module.css'
import { images } from '../../assets/images'

const Logo = () => (
  <div className={classes.Logo}>
    <img src={images.monster_burger_logo} alt={'burger-logo'}/>
  </div>
)

export default Logo