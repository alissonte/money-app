import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <li>
        <Link key={props.path} to={props.path}>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </Link>
    </li>
)