import React from 'react';

const VideoListItem =({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

// when this <li> gets clicked pass the video to onVideoSelect which will pass throught to App
	return (
			<li onClick={() => onVideoSelect(video)} className="list-group-item">
				<div className="video-list media">
					<div className ="media-left">
						<img className="media-object" src={imageUrl}/>
					</div>
				</div>
				<div className="media-body">
					<div className="media-heading" >{video.snippet.title}</div>
					<div>{video.snippet.publishedAt}</div>
				</div>
			</li>
		);
};

export default VideoListItem;