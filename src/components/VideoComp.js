import React, { useState } from "react";

function VideoComp({ video, comments, handleComment }) {
  const [upvote, setUpvote] = useState(video.upvotes);
  const [downvote, setDownvote] = useState(video.downvotes);
  function handleUpvote() {
    setUpvote(upvote + 1);
  }
  function handleDownvote() {
    setDownvote(downvote + 1);
  }
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreenm
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={handleUpvote}>{upvote}&#128077;</button>
        <button onClick={handleDownvote}>{downvote}&#128078;</button>
      </div>
    </div>
  );
}
export default VideoComp;
