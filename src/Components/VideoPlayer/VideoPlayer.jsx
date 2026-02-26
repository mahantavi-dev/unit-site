import React, { useRef, useEffect } from 'react'
import './VideoPlayer.css'
import about_video from '../../assets/about_video.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {

  const videoRef = useRef(null);

  const closeVideo = () => {
    setPlayState(false);
  };

  // Stop video when closed
  useEffect(() => {
    if (!playState && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [playState]);

  return (
    <div 
      className={`video-player ${playState ? 'show' : ''}`}
      onClick={closeVideo}
    >
      <video
        ref={videoRef}
        src={about_video}
        autoPlay
        muted
        controls
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default VideoPlayer