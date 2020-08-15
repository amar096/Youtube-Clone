import React from 'react'
import './VideoRow.css'

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow_text" >
                <h3>{title}</h3>
                <p classname="videoRow_headline">
                    {channel} . {" "}
                    <span classname="videoRow_subs">
                        <span classname="videoRow_subsumber">{subs}</span> Subscribers
                    </span>{" "}  
                    {views} . {timestamp}                    
                </p>
                <p className="videoRow_decription" >{description}</p>

            </div>
            
        </div>
    )
}

export default VideoRow
