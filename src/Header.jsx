import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

function Header() {

    const [inputSearch, setInputSearch] = useState("")

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <Link to= "/">
                    <img className="header_logo" src="/images/youtube_logo.JPG" alt="youtube_logo"/>
                </Link>
            </div>
            <div className="header_input">
                <input value={inputSearch} onChange={e=>setInputSearch(e.target.value)} placeholder="Search" type="text"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton"/>
                </Link>                
            </div>
            
            <div className="header_icons">
            <VideoCallIcon className="header_icon"/>
            <AppsIcon className="header_icon"/>
            <NotificationIcon className="header_icon"/>
            <Avatar className="header_icon" src="/images/Amar.jpg"/>
            </div>            

        </div>
    )
}

export default Header
