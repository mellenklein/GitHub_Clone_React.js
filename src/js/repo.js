import React, { PropTypes } from 'react'

function Repo(props){
  return (
    <li className="repo">
      <p>{props.title}</p>
      <p>{props.created_at}</p>
    </li>
  )
}

export default Repo;
