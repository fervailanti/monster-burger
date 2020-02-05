import React from 'react'
import classes from './Loader.module.css'

const Loader = () => (
  <div className={classes.LoaderContainer}>
    <div className={classes.loader}>Loading...</div>
  </div>
)

export default Loader