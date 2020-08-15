import React from 'react'
import './RecomendedVideos.css'
import VideoCard from './VideoCard'

function RecomendedVideos() {
    return (
        <div className="recomendedVideos">
            <h2>Recommended</h2>
            <div className="recomendedVideos_videos">
            <VideoCard 
                image="/images/CarryMinatti_Video.JPG"
                title="CarryMinati Roasting the Social Media"
                channel="CarryMinatti"
                channelImage="/images/Amar.jpg"
                views="2.5M Views"
                timestamp="3 Days ago"

            />
            <VideoCard 
                image="/images/Cricket_highlight.JPG"
                title="India Vs Australia highlights"
                channel="CricketDekho"
                channelImage="/images/Amar.jpg"
                views="2.5M Views"
                timestamp="1 Month ago"

            />
            <VideoCard 
                image="/images/Cricket_Video.JPG"
                title="England all out for lowest score in a test match"
                channel="CricketDekho"
                channelImage="/images/Amar.jpg"
                views="2.5M Views"
                timestamp="1 Year ago"

            />
            <VideoCard 
                image="/images/funtantr_video.JPG"
                title="Ab Mulayab bhi hojaiyega Modi bhakt"
                channel="FunTantr"
                channelImage="/images/Amar.jpg"
                views="2.5M Views"
                timestamp="1 Week ago"

            />
            <VideoCard 
                image="/images/kapilSharma_videos.JPG"
                title="Team of Bhaghi3 on Kapil Sharma Show"
                channel="Kapil Sharma Show"
                channelImage="/images/Amar.jpg"
                views="2.5M Views"
                timestamp="5 month ago"

            />
            <VideoCard 
                image="/images/ScoopWoop_Video.JPG"
                title="Scoop Woop with Anubhav Sinha"
                channel="ScoopWoop"
                channelImage="/images/Amar.jpg"
                views="2.5M Views"
                timestamp="1 Year ago"

            />
            <VideoCard 
                image="/images/varulGComedy.JPG"
                title="Varun Grover on indian politics and blind followers"
                channel="Standup Comedy"
                channelImage="/images/Amar.jpg"
                views="2.5M Views"
                timestamp="3 weeks ago"

            />
            <VideoCard 
                image="/images/practice_match.JPG"
                title="CSK practice match before IPL"
                channel="CricketDekho"
                channelImage="/images/Amar.jpg"
                views="2.5M Views"
                timestamp="1 Days ago"

            />
           

            </div>
        </div>
    )
}

export default RecomendedVideos
