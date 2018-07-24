import React from "react"
import VideoListItem from "./video-list-item";

const VideoList = (props) => {
    const video_item = props.videos.map(video => {
        return (
            <VideoListItem
                key={video.etag}
                onVideoSelect={props.onVideoSelect}
                video={video} />
        )
    })

    return (
        <ul className="col-md-4 list-group">
            {video_item}
        </ul>
    )
}

export default VideoList;