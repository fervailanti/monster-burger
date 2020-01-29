import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = ({ show, backdropClick }) => (
  show ? <div className={classes.Backdrop} onClick={backdropClick}></div> : null
)

export default Backdrop