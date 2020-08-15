import React from 'react'
import './SearchPage.css'
import FilterIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className= "searchPage_filter">
                <FilterIcon/>
                <h1>Filter</h1>
                
            </div>
            <hr/>

            <ChannelRow 
                image="/images/Amar.jpg"
                channel="Do You Know"
                verified
                subs="1M"
                noOfVideos={382}
                description="You can find some of the awesome and jawdroping informative videos here"
            />
            <hr/>

            <VideoRow
                views="2.5M Views"
                subs="25M"
                description=" CarryMinati Roasting the Social Media "
                timestamp=" 3 Days ago "
                channel="CarryMinatti"
                title="CarryMinati Roasting the Social Media"
                image="/images/CarryMinatti_Video.JPG"
            />
           
            <VideoRow 
                image="/images/Cricket_highlight.JPG"
                title="India Vs Australia highlights"
                subs="25M"
                channel="CricketDekho"
                description=" India Vs Australia highlights "
                views="2.5M Views"
                timestamp="1 Month ago"

            />
            <VideoRow 
                image="/images/Cricket_Video.JPG"
                title="England all out for lowest score in a test match"
                channel="CricketDekho"
                subs="25M"
                description=" England all out for lowest score in a test match "
                views="2.5M Views"
                timestamp="1 Year ago"

            />
            <VideoRow 
                image="/images/funtantr_video.JPG"
                title="Ab Mulayab bhi hojaiyega Modi bhakt"
                channel="FunTantr"
                subs="25M"
                description=" Ab Mulayab bhi hojaiyega Modi bhakt "
                views="2.5M Views"
                timestamp="1 Week ago"

            />
            <VideoRow 
                image="/images/kapilSharma_videos.JPG"
                title="Team of Bhaghi3 on Kapil Sharma Show"
                channel="Kapil Sharma Show"
                subs="25M"
                description=" Team of Bhaghi3 on Kapil Sharma Show "
                views="2.5M Views"
                timestamp="5 month ago"

            />
            <VideoRow 
                image="/images/ScoopWoop_Video.JPG"
                title="Scoop Woop with Anubhav Sinha"
                channel="ScoopWoop"
                subs="25M"
                description=" Scoop Woop with Anubhav Sinha "
                views="2.5M Views"
                timestamp="1 Year ago"

            />
            <VideoRow 
                image="/images/varulGComedy.JPG"
                title="Varun Grover on indian politics and blind followers"
                channel="Standup Comedy"
                subs="25M"
                description=" Varun Grover on indian politics and blind followers "
                views="2.5M Views"
                timestamp="3 weeks ago"

            />
            <VideoRow 
                image="/images/practice_match.JPG"
                title="CSK practice match before IPL"
                channel="CricketDekho"
                subs="25M"
                description=" CSK practice match before IPL "
                views="2.5M Views"
                timestamp="1 Days ago"

            />
        </div>
    )
}

export default SearchPage
