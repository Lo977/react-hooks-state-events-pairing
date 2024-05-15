import React, { useState } from "react";
function DisplayComment({ comment, handleDelete }) {
  const [upVote, setUpvote] = useState(0);
  const [downVote, setDownvote] = useState(0);

  function handleDownvote() {
    setDownvote(downVote + 1);
  }

  function handleUpvote() {
    setUpvote(upVote + 1);
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>

      <div>
        <button onClick={handleUpvote}>{upVote}&#128077;</button>
        <button onClick={handleDownvote}>{downVote}&#128078;</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
export default DisplayComment;
