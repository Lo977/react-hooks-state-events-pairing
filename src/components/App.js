import React from "react";
import video from "../data/video.js";
import VideoComp from "./VideoComp.js";
import CommentComp from "./CommentComp.js";

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoComp video={video} />
      <CommentComp comments={video.comments} />
    </div>
  );
}

export default App;
