import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationsItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const SideDrawer = ({ show, close }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  show && ( attachedClasses = [classes.SideDrawer, classes.Open] )
  return (
    <Aux>
      <Backdrop show={show} backdropClick={close}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
          <p className={classes.AppTitle}>
            Monster Burger
          </p>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer