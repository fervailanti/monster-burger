import React, { useState, useRef } from 'react'
import classes from './Collapsible.module.css'
import arrow from '../../assets/images/arrow.svg'

const Collapsible = props => {

  const [expanded, setExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState("0px")

  const content = useRef(null);

  const toggleCollapsible = () => {
    const expandedCopy = expanded
    setExpanded(!expandedCopy)
    setContentHeight(expandedCopy ? '0px' : `${content.current.scrollHeight}px`)
  }

  return (
    <div className={classes.Collapsible}>
      <div 
        onClick={toggleCollapsible}
        className={classes.CollapsibleTitle}
        style={{
          color: expanded && '#802f30',
          fontWeight: expanded && '600'
      }}>
        <p>{props.title}</p>
        <img 
          src={arrow}
          alt={expanded ? 'Ver más' : 'Ver menos'}
          style={{
            transform: expanded && 'rotate(180deg)'
        }}/>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${contentHeight}` }}
        className={classes.CollapsibleContent}
      >
        {props.content}
      </div>
    </div>
  )
}

export default Collapsible