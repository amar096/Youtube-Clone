import React from 'react'
import './SideRow.css'

function SideRow({selected, Icon, title}) {
    return (
        <div className={`siderow ${selected && "selected"}`}>
            <Icon className="siderow_icon"/>
            <h2 className="siderow_title">{title}</h2>
            <hr/>
        </div>
    )
}

export default SideRow
