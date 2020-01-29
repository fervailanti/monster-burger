import React, { useState } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = props => {

  const [showSideDrawer, setSideDrawer] = useState(false)
  
  return (
    <div className={classes.Container}>
      <Toolbar drawerToggleClick={() => setSideDrawer(!showSideDrawer)}/>
      <SideDrawer 
        show={showSideDrawer} 
        close={() => setSideDrawer(false)}
      /> 
      <main className={classes.Content}>
        {props.children}
      </main>
    </div>
  )
}

export default Layout