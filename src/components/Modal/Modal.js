import React from 'react'
import classes from './Modal.module.css'
import Aux from '../../components/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

const Modal = ({ children, show, closeModal }) => (
  <Aux>
    <Backdrop show={show} backdropClick={closeModal}/>
    <div 
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      {children}
    </div>
  </Aux> 
)

export default Modal