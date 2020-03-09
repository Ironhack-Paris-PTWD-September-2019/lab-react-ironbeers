import React from 'react'

export default props => (
  <svg role="img" className="icon">
    <use xlinkHref={`/icons.svg#${props.name}`}/>
  </svg>
)