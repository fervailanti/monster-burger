import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>
      Ordenar
    </NavigationItem>
    <NavigationItem link='/orders'>
      Pedidos
    </NavigationItem>
  </ul>
)

export default NavigationItems