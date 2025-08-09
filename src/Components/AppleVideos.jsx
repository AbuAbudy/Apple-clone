import React, { useEffect, useState } from 'react';
import "../css/AppleVideos.css";

function AppleVideos() {
  const [AppleVideos, setAppleVideos] = useState([]);
  const [error, setError] = useState(null);

  // Load API key from environment variables
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw"; // Apple channel ID
  const MAX_RESULTS = 18;

  useEffect(() => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${MAX_RESULTS}`;
    
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch videos: ' + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        if (data.items) {
          setAppleVideos(data.items);
        } else {
          setAppleVideos([]);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch videos:", error);
        setError(error.message);
      });
  }, [API_KEY]);

  return (
    <div id='vedio'>
      <h2>Latest Apple Videos</h2>
      {error && <div className="error">Error: {error}</div>}
      <div className="video-grid">
        {AppleVideos.length > 0 ? (
          AppleVideos.map((video) => (
            <div key={video.id.videoId} className="video-item">
              <iframe
                width="300"
                height="180"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allowFullScreen
                title={video.snippet.title}
              ></iframe>
              <p>{video.snippet.title}</p>
            </div>
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>
    </div>
  );
}

export default AppleVideos;