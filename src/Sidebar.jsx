import React from 'react'
import './Sidebar.css'
import SideRow from './SideRow';
import HomeIcon from '@material-ui/icons/Home'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import TrendingIcon from '@material-ui/icons/Whatshot'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import LikedVideoIcon from'@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className="sidebar">
            <SideRow selected Icon={HomeIcon} title="Home"/>
            <SideRow Icon={TrendingIcon} title="Trending"/>
            <SideRow Icon={SubscriptionIcon} title="Subscription"/>
            <hr/>
            <SideRow  Icon={VideoLibraryIcon} title="Library"/>
            <SideRow  Icon={HistoryIcon} title="History"/>
            <SideRow  Icon={OnDemandVideoIcon} title="Your Videos"/>
            <SideRow  Icon={WatchLaterIcon} title="Watch Later"/>
            <SideRow  Icon={LikedVideoIcon} title="Liked Videos"/>
            <SideRow  Icon={ExpandMoreOutlinedIcon} title="Show more"/>
            <hr/>
        </div>
    )
}

export default Sidebar
