import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationsItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = ({ drawerToggleClick }) => (
  <header className={classes.Toolbar}>

    <DrawerToggle click={drawerToggleClick}/>

    <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <span className={classes.DesktopOnly}>
        <Logo />
      </span>
      <h1>Monster Burger</h1>
    </div>
    
    <span className={classes.MobileOnly}>
      <Logo />
    </span>

    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>

  </header>
)

export default Toolbar