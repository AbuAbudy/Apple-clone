import React, { useEffect, useState } from 'react';
import "../css/AppleVideos.css";

function AppleVideos() {
  const [AppleVideos, setAppleVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCiiTkLyMPNJSlEhVZPSKqAY-K3itzz2zI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&order=date&maxResults=18")
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
  }, []);

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
