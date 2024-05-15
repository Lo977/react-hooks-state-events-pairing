import React, { useState } from "react";
import DisplayComment from "./DisplayComment";

function CommentComp({ comments }) {
  const [isHideComments, setIsHideComments] = useState(false);
  const [isComments, setIsComments] = useState(comments);
  const [search, setSearch] = useState("");

  const filteredComments = isComments.filter((comment) => {
    if (search !== "")
      return comment.user.toLowerCase().startsWith(search.toLowerCase());
    return true;
  });

  function handleComment() {
    setIsHideComments(!isHideComments);
  }
  //   function handleSorting(event) {
  //     setIsComments(event.target.value);
  //   }
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  function handleDelete(param) {
    setIsComments(isComments.filter((comment) => comment.id !== param));
  }
  function displayComments() {
    return (
      <div style={{ marginBottom: "50px" }}>
        <span style={{ fontWeight: "bold" }}>Seach By User : </span>
        <input type="text" value={search} onChange={handleSearch} />
        <br />
        {/* <span>Sort Comments By:</span> */}
        {/* <select name="sort" onChange={handleSorting}>
          {" "}
          <option value="All">All</option>
          <option value="Votes">Most Votes</option>
        </select> */}
        {filteredComments.map((comment) => (
          <DisplayComment
            key={comment.id}
            comment={comment}
            handleDelete={() => handleDelete(comment.id)}
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      <button onClick={handleComment}>
        {isHideComments ? "Show Comments" : "Hide Comments"}
      </button>
      <hr />
      <h2>{comments.length} Comments</h2>
      {isHideComments ? null : displayComments()}
    </div>
  );
}
export default CommentComp;
